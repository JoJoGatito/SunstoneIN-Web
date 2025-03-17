// Manually map Netlify function to Node.js server for Astro
export const handler = async (event, context) => {
  try {
    // Try a few possible paths for the entry point
    let importError = null;
    let handler = null;
    
    try {
      const mod = await import('../../dist/server/entry.mjs');
      handler = mod.handler;
    } catch (err) {
      importError = err;
      console.log('First import path failed:', err.message);
      
      try {
        const mod = await import('/var/task/dist/server/entry.mjs');
        handler = mod.handler;
      } catch (err2) {
        console.log('Second import path failed:', err2.message);
        
        try {
          const mod = await import('/var/task/dist/entry.mjs');
          handler = mod.handler;
        } catch (err3) {
          console.log('Third import path failed:', err3.message);
          importError = err3;
        }
      }
    }
    
    if (!handler) {
      throw importError || new Error('Could not find handler module');
    }
    
    // Format the request object for Astro's Node.js adapter with proper URL handling
    let path = event.path;
    
    // Handle routing properly
    // 1. Strip out the function path if present, keeping actual route path
    if (path.startsWith('/.netlify/functions/entry')) {
      const queryParams = event.queryStringParameters || {};
      const astroPathParam = queryParams.astro_path;
      
      // If astro_path query param is provided, use it
      if (astroPathParam) {
        path = astroPathParam;
        console.log('Using astro_path parameter:', path);
      } else {
        // Otherwise, try to extract path from referer or use root
        const referer = event.headers.referer || '';
        const refererUrl = referer ? new URL(referer) : null;
        
        if (refererUrl && refererUrl.pathname && refererUrl.pathname !== '/.netlify/functions/entry') {
          path = refererUrl.pathname;
          console.log('Using path from referer:', path);
        } else {
          path = '/';
          console.log('Defaulting to root path');
        }
      }
    }
    
    // If rawUrl exists, use it; otherwise, construct URL from host and path
    const url = event.rawUrl 
      ? new URL(event.rawUrl) 
      : new URL(`https://${event.headers.host}${path}`);
      
    // Log for debugging
    console.log('Processing URL:', url.toString(), 'Original path:', event.path);
    
    const formattedRequest = new Request(url, {
      method: event.httpMethod,
      headers: new Headers(event.headers),
      body: event.body ? Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8') : null
    });
    
    // Log request details for debugging
    console.log('Request details:', {
      method: event.httpMethod,
      path: path,
      url: url.toString(),
      queryParams: event.queryStringParameters || {},
      headers: Object.keys(event.headers)
    });
    
    // Call the handler with our formatted request
    const response = await handler(formattedRequest);
    
    // Log response details for debugging
    console.log('Response status:', response.status);
    console.log('Response headers:', [...response.headers.entries()]);
    
    // Convert the response back to Netlify's expected format
    const responseHeaders = Object.fromEntries(response.headers.entries());
    
    let responseBody;
    let isBase64Encoded = false;
    
    // Handle different response types
    const contentType = response.headers.get('content-type') || '';
    
    if (contentType.includes('text/html') || contentType.includes('application/javascript') || 
        contentType.includes('text/css') || contentType.includes('application/json')) {
      // For text-based responses
      responseBody = await response.text();
      
      // Fix paths to assets if needed
      if (responseBody.includes('/_astro/')) {
        console.log('Fixing asset paths in response');
        // Make sure static assets are correctly referenced
        responseBody = responseBody.replace(/\/_astro\//g, '/dist/_astro/');
      }
      
      // Fix relative paths in links and forms if needed
      const relativePaths = ['/portal', '/login', '/contact', '/forum'];
      for (const path of relativePaths) {
        if (responseBody.includes(`href="${path}`) || responseBody.includes(`action="${path}`)) {
          console.log(`Fixing relative path: ${path}`);
          const regex = new RegExp(`(href|action)="${path}`, 'g');
          responseBody = responseBody.replace(regex, `$1="/.netlify/functions/entry?astro_path=${path}`);
        }
      }
    } else if (contentType.includes('image/') || contentType.includes('font/') || 
               contentType.includes('audio/') || contentType.includes('video/') ||
               contentType.includes('application/octet-stream')) {
      // For binary responses, use base64 encoding
      const buffer = await response.arrayBuffer();
      responseBody = Buffer.from(buffer).toString('base64');
      isBase64Encoded = true;
    } else {
      // Default case - treat as text
      responseBody = await response.text();
    }
    
    return {
      statusCode: response.status,
      headers: responseHeaders,
      body: responseBody,
      isBase64Encoded: isBase64Encoded
    };
  } catch (error) {
    console.error('Execution error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Server configuration error', 
        message: error.message,
        stack: error.stack
      })
    };
  }
};
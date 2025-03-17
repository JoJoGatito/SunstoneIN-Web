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
    
    // Format the request object for Astro's Node.js adapter
    const url = new URL(event.rawUrl || `https://${event.headers.host}${event.path}`);
    const formattedRequest = new Request(url, {
      method: event.httpMethod,
      headers: new Headers(event.headers),
      body: event.body ? Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8') : null
    });
    
    // Call the handler with our formatted request
    const response = await handler(formattedRequest);
    
    // Convert the response back to Netlify's expected format
    const responseHeaders = Object.fromEntries(response.headers.entries());
    
    return {
      statusCode: response.status,
      headers: responseHeaders,
      body: await response.text(),
      isBase64Encoded: false
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
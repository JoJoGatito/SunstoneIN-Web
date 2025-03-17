// Use dynamic import for compatibility and correct path
export const handler = async (event, context) => {
  // When deployed, Netlify places functions in a different location
  // than during local development, so we need to handle both cases
  try {
    const { handler: astroHandler } = await import('../../dist/server/entry.mjs');
    return astroHandler(event, context);
  } catch (error) {
    // Fallback path for Netlify deployment environment
    try {
      const { handler: astroHandler } = await import('../dist/server/entry.mjs');
      return astroHandler(event, context);
    } catch (secondError) {
      console.error('Failed to import handler:', error);
      console.error('Failed fallback import:', secondError);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }
  }
};
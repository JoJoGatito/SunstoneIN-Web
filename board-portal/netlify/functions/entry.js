// This file will be replaced by the Astro Netlify adapter during build
// This is just a placeholder that gets executed during development
export const handler = async (event, context) => {
  try {
    const { handler: astroHandler } = await import('../../dist/server/entry.mjs');
    return astroHandler(event, context);
  } catch (error) {
    console.error('Failed to import handler:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration error' })
    };
  }
};
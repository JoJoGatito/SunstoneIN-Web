// ES Module import is required instead of CommonJS require
export const handler = async (event, context) => {
  const { handler } = await import('../../dist/server/entry.mjs');
  return handler(event, context);
};
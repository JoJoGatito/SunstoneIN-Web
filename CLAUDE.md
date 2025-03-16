# SunstoneIN-Web Development Guide

## Commands
- `cd board-portal && npm run dev` - Start development server
- `cd board-portal && npm run build` - Build for production
- `cd board-portal && npm run preview` - Preview production build

## Project Stack
- Astro 5.x (SSR mode with Node adapter)
- React 19 for client components
- Tailwind CSS for styling
- Supabase for authentication and database

## Code Style Guidelines
- **Imports**: Group by external/internal, alphabetize
- **TypeScript**: Use strict types, avoid `any`
- **Components**: Astro components for pages, React for interactive UI
- **Naming**: Use PascalCase for components, camelCase for variables/functions
- **Error Handling**: Log errors with context, use try/catch for async
- **Forms**: Use react-hook-form with zod validation
- **Auth**: Access user context via Astro.locals.user after middleware

## File Structure
- `/src/pages/` - Routing structure
- `/src/components/` - Reusable UI components
- `/src/layouts/` - Page layouts and wrappers
- `/src/lib/` - Shared utilities and integrations
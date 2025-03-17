import { f as createAstro, g as createComponent, i as addAttribute, j as renderHead, k as renderSlot, r as renderTemplate } from './astro/server_DdXDRuRu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { s as supabase } from './supabase_x6k2sfRc.mjs';
/* empty css                         */

const $$Astro = createAstro("https://sunstoneinclusivity.network");
const $$PortalLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PortalLayout;
  const { title } = Astro2.props;
  const user = Astro2.locals.user;
  const baseUrl = "/";
  if (Astro2.request.method === "POST" && new URL(Astro2.request.url).searchParams.get("action") === "logout") {
    await supabase.auth.signOut();
    return Astro2.redirect("/login");
  }
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} - Board Portal</title><link rel="icon" type="image/svg+xml"${addAttribute(`${baseUrl}/favicon.svg`, "href")}><!-- Import Tailwind CSS -->${renderHead()}</head> <body class="bg-gray-100"> <div class="min-h-screen flex flex-col"> <!-- Top navigation --> <header class="bg-white shadow"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16"> <h1 class="text-xl font-bold">Board Portal</h1> <div class="flex items-center space-x-4"> <span>${user?.email}</span> <form method="POST"> <input type="hidden" name="action" value="logout"> <button type="submit" class="text-sm text-gray-700 hover:text-gray-900">
Logout
</button> </form> </div> </div> </header> <!-- Sidebar and main content --> <div class="flex-1 flex"> <!-- Sidebar --> <aside class="w-64 bg-white shadow-md"> <nav class="mt-5 px-2"> <a${addAttribute(`${baseUrl}/portal`, "href")} class="group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-gray-50 hover:text-indigo-600">
Home
</a> <a${addAttribute(`${baseUrl}/portal/contacts`, "href")} class="group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-gray-50 hover:text-indigo-600">
Contacts
</a> <a${addAttribute(`${baseUrl}/portal/forum`, "href")} class="group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-gray-50 hover:text-indigo-600">
Discussion Forum
</a> </nav> </aside> <!-- Main content --> <main class="flex-1 p-6"> ${renderSlot($$result, $$slots["default"])} </main> </div> </div> </body></html>`;
}, "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/layouts/PortalLayout.astro", void 0);

export { $$PortalLayout as $ };

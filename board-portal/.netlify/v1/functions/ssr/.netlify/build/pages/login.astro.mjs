/* empty css                                 */
import { f as createAstro, g as createComponent, i as addAttribute, j as renderHead, k as renderSlot, r as renderTemplate, l as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DdXDRuRu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
import { s as supabase } from '../chunks/supabase_x6k2sfRc.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://sunstoneinclusivity.network");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  const baseUrl = "/";
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="icon" type="image/svg+xml"${addAttribute(`${baseUrl}/favicon.svg`, "href")}><!-- Import Tailwind CSS -->${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro("https://sunstoneinclusivity.network");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    if (email && password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) {
        console.error(error);
      } else if (data?.session) {
        return Astro2.redirect("/portal");
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Login - Board Portal" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-gray-50"> <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md"> <h1 class="text-2xl font-bold text-center mb-6">Board Member Login</h1> <form method="POST" class="space-y-4"> <div> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700">Password</label> <input type="password" id="password" name="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> </div> <div> <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
Sign In
</button> </div> <div class="text-sm text-center"> <a href="/reset-password" class="font-medium text-indigo-600 hover:text-indigo-500">
Forgot password?
</a> </div> </form> </div> </div> ` })}`;
}, "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/login.astro", void 0);

const $$file = "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

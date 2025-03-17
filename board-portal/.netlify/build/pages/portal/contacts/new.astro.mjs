/* empty css                                       */
import { f as createAstro, g as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DdXDRuRu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$PortalLayout } from '../../../chunks/PortalLayout_BCyQirPy.mjs';
import { s as supabase } from '../../../chunks/supabase_x6k2sfRc.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://sunstoneinclusivity.network");
const $$New = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$New;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const name = formData.get("name")?.toString();
    const organization = formData.get("organization")?.toString();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();
    const notes = formData.get("notes")?.toString();
    if (name) {
      const { error } = await supabase.from("contacts").insert({
        name,
        organization,
        email,
        phone,
        notes,
        created_by: Astro2.locals.user.id
      });
      if (error) {
        console.error(error);
      } else {
        return Astro2.redirect("/portal/contacts");
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "PortalLayout", $$PortalLayout, { "title": "Add New Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-6"> <h1 class="text-2xl font-bold">Add New Contact</h1> </div> <div class="bg-white shadow rounded-lg p-6"> <form method="POST" class="space-y-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700">Name</label> <input type="text" id="name" name="name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> </div> <div> <label for="organization" class="block text-sm font-medium text-gray-700">Organization</label> <input type="text" id="organization" name="organization" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> </div> <div> <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label> <input type="tel" id="phone" name="phone" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> </div> <div> <label for="notes" class="block text-sm font-medium text-gray-700">Notes</label> <textarea id="notes" name="notes" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea> </div> <div class="flex justify-end"> <a href="/portal/contacts" class="mr-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
Cancel
</a> <button type="submit" class="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700">
Save Contact
</button> </div> </form> </div> ` })}`;
}, "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/portal/contacts/new.astro", void 0);

const $$file = "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/portal/contacts/new.astro";
const $$url = "/portal/contacts/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

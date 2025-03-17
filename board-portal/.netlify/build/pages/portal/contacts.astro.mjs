/* empty css                                    */
import { g as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute } from '../../chunks/astro/server_DdXDRuRu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$PortalLayout } from '../../chunks/PortalLayout_Cz7LNTZN.mjs';
import { s as supabase } from '../../chunks/supabase_BeVI_aZZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: contacts } = await supabase.from("contacts").select("*").order("name");
  return renderTemplate`${renderComponent($$result, "PortalLayout", $$PortalLayout, { "title": "Contacts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-between items-center mb-6"> <h1 class="text-2xl font-bold">Contacts</h1> <a href="/portal/contacts/new" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
Add New Contact
</a> </div>  <div class="bg-white shadow rounded-lg overflow-hidden"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Name
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Organization
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Email
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Phone
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Notes
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${contacts?.map((contact) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap"> <div class="font-medium text-gray-900">${contact.name}</div> </td> <td class="px-6 py-4 whitespace-nowrap"> <div class="text-gray-500">${contact.organization}</div> </td> <td class="px-6 py-4 whitespace-nowrap"> <a${addAttribute(`mailto:${contact.email}`, "href")} class="text-indigo-600 hover:text-indigo-900"> ${contact.email} </a> </td> <td class="px-6 py-4 whitespace-nowrap"> <div class="text-gray-500">${contact.phone}</div> </td> <td class="px-6 py-4"> <div class="text-gray-500">${contact.notes}</div> </td> </tr>`)} ${!contacts?.length && renderTemplate`<tr> <td colspan="5" class="px-6 py-4 text-center text-gray-500">
No contacts found. Add your first contact.
</td> </tr>`} </tbody> </table> </div> ` })}`;
}, "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/portal/contacts/index.astro", void 0);

const $$file = "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/portal/contacts/index.astro";
const $$url = "/portal/contacts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

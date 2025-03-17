/* empty css                                 */
import { g as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DdXDRuRu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$PortalLayout } from '../chunks/PortalLayout_Cz7LNTZN.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PortalLayout", $$PortalLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold mb-6">Welcome to the Board Portal</h1> <div class="bg-white shadow rounded-lg p-6"> <p class="mb-4">This portal provides access to:</p> <ul class="list-disc pl-5 space-y-2"> <li> <a href="/portal/contacts" class="text-indigo-600 hover:underline">Board Contacts</a>
- View and add contact information for board members and key stakeholders
</li> <li> <a href="/portal/forum" class="text-indigo-600 hover:underline">Discussion Forum</a>
- Participate in board discussions and communications
</li> </ul> </div> ` })}`;
}, "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/portal/index.astro", void 0);

const $$file = "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/portal/index.astro";
const $$url = "/portal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

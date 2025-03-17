/* empty css                                    */
import { f as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute } from '../../chunks/astro/server_Diyk09nw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$PortalLayout } from '../../chunks/PortalLayout_Cb8ujQCf.mjs';
import { s as supabase } from '../../chunks/supabase_x6k2sfRc.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: topics } = await supabase.from("forum_topics").select(`
    id,
    title,
    created_at,
    created_by,
    forum_replies(count)
  `).order("created_at", { ascending: false });
  const userIds = topics?.map((topic) => topic.created_by) || [];
  const { data: userEmails } = await supabase.from("auth.users").select("id, email").in("id", userIds);
  const userEmailMap = {};
  userEmails?.forEach((user) => {
    userEmailMap[user.id] = user.email;
  });
  return renderTemplate`${renderComponent($$result, "PortalLayout", $$PortalLayout, { "title": "Discussion Forum" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-between items-center mb-6"> <h1 class="text-2xl font-bold">Discussion Forum</h1> <a href="/portal/forum/new" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
Start New Discussion
</a> </div>  <div class="bg-white shadow rounded-lg overflow-hidden"> ${topics?.length ? renderTemplate`<ul class="divide-y divide-gray-200"> ${topics.map((topic) => {
    const createdAt = new Date(topic.created_at).toLocaleDateString();
    const userEmail = userEmailMap[topic.created_by] || "Unknown";
    const replyCount = topic.forum_replies[0]?.count || 0;
    return renderTemplate`<li class="p-4 hover:bg-gray-50"> <a${addAttribute(`/portal/forum/${topic.id}`, "href")} class="block"> <div class="flex justify-between"> <h3 class="text-lg font-medium text-indigo-600">${topic.title}</h3> <span class="text-sm text-gray-500">${createdAt}</span> </div> <div class="mt-2 flex justify-between text-sm text-gray-500"> <span>Started by: ${userEmail}</span> <span>${replyCount} ${replyCount === 1 ? "reply" : "replies"}</span> </div> </a> </li>`;
  })} </ul>` : renderTemplate`<div class="p-6 text-center text-gray-500">
No discussions yet. Start the first one!
</div>`} </div> ` })}`;
}, "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/portal/forum/index.astro", void 0);

const $$file = "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/portal/forum/index.astro";
const $$url = "/portal/forum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

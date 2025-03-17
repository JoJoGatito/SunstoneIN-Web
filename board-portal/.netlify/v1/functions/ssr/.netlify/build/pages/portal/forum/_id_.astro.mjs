/* empty css                                       */
import { f as createAstro, g as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DdXDRuRu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$PortalLayout } from '../../../chunks/PortalLayout_Cz7LNTZN.mjs';
import { s as supabase } from '../../../chunks/supabase_BeVI_aZZ.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://sunstoneinclusivity.network");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/portal/forum");
  }
  const { data: topic } = await supabase.from("forum_topics").select("*").eq("id", id).single();
  if (!topic) {
    return Astro2.redirect("/portal/forum");
  }
  const { data: replies } = await supabase.from("forum_replies").select("*").eq("topic_id", id).order("created_at");
  const userIds = [
    topic.created_by,
    ...replies?.map((reply) => reply.created_by) || []
  ];
  const uniqueUserIds = [...new Set(userIds)];
  const { data: userEmails } = await supabase.from("auth.users").select("id, email").in("id", uniqueUserIds);
  const userEmailMap = {};
  userEmails?.forEach((user) => {
    userEmailMap[user.id] = user.email;
  });
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const content = formData.get("content")?.toString();
    if (content) {
      const { error } = await supabase.from("forum_replies").insert({
        content,
        topic_id: id,
        created_by: Astro2.locals.user.id
      });
      if (error) {
        console.error(error);
      } else {
        const { data: users } = await supabase.from("auth.users").select("email");
        const recipient_emails = users?.map((user) => user.email) || [];
        await fetch(`${"https://ffpdecfzotgqkmuyvslt.supabase.co"}/functions/v1/forum-notification`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmcGRlY2Z6b3RncWttdXl2c2x0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NDA5NjEsImV4cCI6MjA1NzIxNjk2MX0.jdlw2Mbh_Wt3ZyqspGm266THRvs3w6hfd9uO_rPNZWk"}`
          },
          body: JSON.stringify({
            topic,
            recipient_emails,
            type: "new_reply"
          })
        });
        return Astro2.redirect(`/portal/forum/${id}`);
      }
    }
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };
  return renderTemplate`${renderComponent($$result, "PortalLayout", $$PortalLayout, { "title": topic.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-6"> <a href="/portal/forum" class="text-indigo-600 hover:underline">← Back to Forum</a> <h1 class="text-2xl font-bold mt-2">${topic.title}</h1> </div>  <div class="bg-white shadow rounded-lg p-6 mb-6"> <div class="flex justify-between text-sm text-gray-500 mb-4"> <span>Posted by: ${userEmailMap[topic.created_by] || "Unknown"}</span> <span>${formatDate(topic.created_at)}</span> </div> <div class="prose max-w-none"> <p>${topic.content}</p> </div> </div>  <h2 class="text-xl font-semibold mb-4">Replies</h2> ${replies?.length ? renderTemplate`<div class="space-y-4 mb-6"> ${replies.map((reply) => renderTemplate`<div class="bg-white shadow rounded-lg p-6"> <div class="flex justify-between text-sm text-gray-500 mb-4"> <span>Reply by: ${userEmailMap[reply.created_by] || "Unknown"}</span> <span>${formatDate(reply.created_at)}</span> </div> <div class="prose max-w-none"> <p>${reply.content}</p> </div> </div>`)} </div>` : renderTemplate`<div class="bg-white shadow rounded-lg p-6 mb-6 text-center text-gray-500">
No replies yet. Be the first to respond!
</div>`} <div class="bg-white shadow rounded-lg p-6"> <h3 class="text-lg font-medium mb-4">Add Reply</h3> <form method="POST" class="space-y-4"> <div> <textarea id="content" name="content" rows="4" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your reply..."></textarea> </div> <div class="flex justify-end"> <button type="submit" class="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700">
Post Reply
</button> </div> </form> </div> ` })}`;
}, "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/portal/forum/[id].astro", void 0);
const $$file = "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/portal/forum/[id].astro";
const $$url = "/portal/forum/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

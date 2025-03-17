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
    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();
    if (title && content) {
      const { data: topic, error } = await supabase.from("forum_topics").insert({
        title,
        content,
        created_by: Astro2.locals.user.id
      }).select().single();
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
            type: "new_topic"
          })
        });
        return Astro2.redirect(`/portal/forum/${topic.id}`);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "PortalLayout", $$PortalLayout, { "title": "Start New Discussion" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-6"> <h1 class="text-2xl font-bold">Start New Discussion</h1> </div> <div class="bg-white shadow rounded-lg p-6"> <form method="POST" class="space-y-6"> <div> <label for="title" class="block text-sm font-medium text-gray-700">Title</label> <input type="text" id="title" name="title" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"> </div> <div> <label for="content" class="block text-sm font-medium text-gray-700">Content</label> <textarea id="content" name="content" rows="6" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea> </div> <div class="flex justify-end"> <a href="/portal/forum" class="mr-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
Cancel
</a> <button type="submit" class="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700">
Post Discussion
</button> </div> </form> </div> ` })}`;
}, "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/portal/forum/new.astro", void 0);
const $$file = "/Users/yordan/Projects/SunstoneIN-Web/board-portal/src/pages/portal/forum/new.astro";
const $$url = "/portal/forum/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

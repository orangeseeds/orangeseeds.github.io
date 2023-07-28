import { c as create_ssr_component, e as each, a as escape } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const posts = data.posts.map((post) => {
    return {
      ...post,
      slug: post.title.replaceAll(" ", "_").toLowerCase()
    };
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="text-2xl font-bold" data-svelte-h="svelte-apqjql">Posts</h1> <ul>${each(posts, (post) => {
    return `<li class="text-emerald-600 hover:underline"><a href="${escape(base, true) + "/posts/" + escape(post.slug, true)}">${escape(post.title)}</a> </li>`;
  })}</ul>`;
});
export {
  Page as default
};

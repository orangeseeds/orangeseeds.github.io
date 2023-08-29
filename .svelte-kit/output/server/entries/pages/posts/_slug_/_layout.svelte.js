import { c as create_ssr_component, e as each, a as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { b as base } from "../../../../chunks/paths.js";
const RelatedPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<aside class="max-w-xs mr-auto sm:mr-6 sm:max-w-[12rem] font-light space-y-4 text-slate-600"><h3 class="font-bold" data-svelte-h="svelte-g3vaeu">Related Posts</h3> <ul class="text-sm font-light space-y-3">${each(posts, (post) => {
    return `<li class="hover:underline"><a href="${escape(base, true) + "/posts/" + escape(post.slug, true)}"><span class="font-medium text-emerald-600">${escape(post.title)}</span> <p class="font-light md:text-xs text-sm text-slate-500">${escape(post.description.substring(0, 100))}...</p> <span class="font-extralight md:text-xs text-sm text-slate-400">${escape(post.date)} · ${escape(post.readTime)} </span></a> </li>`;
  })}</ul></aside>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const computedPosts = data.posts.map((post) => {
    return {
      ...post,
      slug: post.title.replaceAll(" ", "_").toLowerCase()
    };
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="flex justify-center flex-wrap-reverse pt-10">${validate_component(RelatedPosts, "RelatedPosts").$$render($$result, { posts: computedPosts }, {}, {})} ${slots.default ? slots.default({}) : ``}</section>`;
});
export {
  Layout as default
};

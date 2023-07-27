import { c as create_ssr_component, e as each, a as escape } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.posts = data.posts.map((post) => {
    return {
      ...post,
      slug: post.title.replaceAll(" ", "_").toLowerCase()
    };
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="flex flex-col items-center">${slots.default ? slots.default({}) : ``} <aside><h3 data-svelte-h="svelte-ilj6ua">More Posts</h3> <ul>${each(data.posts, (post) => {
    return `<li><a href="${escape(base, true) + "/posts/" + escape(post.slug, true)}">${escape(post.title)}</a> </li>`;
  })}</ul></aside></section>`;
});
export {
  Layout as default
};

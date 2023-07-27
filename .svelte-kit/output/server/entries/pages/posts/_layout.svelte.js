import { c as create_ssr_component, e as each, a as escape } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="layout"><main>${slots.default ? slots.default({}) : ``}</main></div> <aside><h3 data-svelte-h="svelte-ilj6ua">More Posts</h3> <ul>${each(data.posts, (post) => {
    return `<li><a href="${escape(base, true) + "/posts/" + escape(post.title, true)}">${escape(post.title)}</a> </li>`;
  })}</ul></aside>`;
});
export {
  Layout as default
};

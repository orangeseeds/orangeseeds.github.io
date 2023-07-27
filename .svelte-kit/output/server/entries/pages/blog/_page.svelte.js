import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<a href="${escape(base, true) + "/blog/post"}" data-svelte-h="svelte-ysoxfn">psot</a>       `;
});
export {
  Page as default
};

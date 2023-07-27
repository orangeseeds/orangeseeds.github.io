import { c as create_ssr_component, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
/* empty css                      */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<article class="prose prose-stone dark:prose-invert prose-img:rounded-xl prose-a:text-blue-600">${validate_component(data.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>       `;
});
export {
  Page as default
};

import { c as create_ssr_component, a as escape, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
/* empty css                      */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="mb-1 max-w-xl"><h2 class="mb-1 font-semibold text-3xl">${escape(data.post.title)}</h2> <span class="text-sm font-normal text-slate-400 my-2">${escape(data.post.date)}</span> <p class="font-thin text-slate-500 mt-4">${escape(data.post.description)}</p></div> <article class="prose prose-slate-900 dark:prose-invert prose-img:rounded-sm prose-a:text-blue-600 prose-p:font-medium max-w-xl">${validate_component(data.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>       `;
});
export {
  Page as default
};

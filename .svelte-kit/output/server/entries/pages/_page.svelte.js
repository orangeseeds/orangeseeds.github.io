import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const Globe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let root;
  return ` <button class="" data-svelte-h="svelte-tjxn8f">Toggle Theme</button> <button class="" data-svelte-h="svelte-13o9t17">Simulate A Message</button> <div id="canvasContainer" class="flex flex-row-reverse justify-center min-h-[100vh] relative "${add_attribute("this", root, 0)}></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` ${validate_component(Globe, "Globe").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

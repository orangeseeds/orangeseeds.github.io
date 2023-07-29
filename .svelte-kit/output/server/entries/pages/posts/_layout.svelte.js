import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="mx-8 my-4">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};

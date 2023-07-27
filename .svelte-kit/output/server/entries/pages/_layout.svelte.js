import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav data-svelte-h="svelte-xj1woj"><a href="/">home</a> <a href="/about">about</a></nav> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

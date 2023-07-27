import { c as create_ssr_component } from "../../chunks/ssr.js";
/* empty css                */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav><a href="/" data-svelte-h="svelte-1bzf17w">home</a> <a href="/about" data-svelte-h="svelte-pmt1op">about</a> <button class="btn btn-circle" data-svelte-h="svelte-146vb95"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></nav> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

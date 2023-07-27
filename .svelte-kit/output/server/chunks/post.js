import { c as create_ssr_component, a as escape } from "./ssr.js";
const metadata = {
  "title": "post",
  "date": "2022-11-29",
  "description": "Blog Post 3 Description"
};
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 0;
  return `<h1 data-svelte-h="svelte-cof3fh">this is a test file</h1> <div data-svelte-h="svelte-1gmx0zk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div> <select><option value="Naice" data-svelte-h="svelte-1wwtxci">Naice</option></select> <button>Click ${escape(count)}</button>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Post,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};

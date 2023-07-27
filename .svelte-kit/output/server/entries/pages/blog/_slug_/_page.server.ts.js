import { e as error } from "../../../../chunks/index.js";
import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { parse } from "path";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const metadata = {
  "title": "post",
  "date": "2022-11-29",
  "description": "Blog Post 3 Description"
};
const Test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 0;
  return `<h1 data-svelte-h="svelte-cof3fh">this is a test file</h1> <p data-svelte-h="svelte-rzm3sy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <button>Click ${escape(count)}</button>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Test,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
const posts = Object.entries(
  /* @__PURE__ */ Object.assign({ "../../../lib/posts/test.md": __vite_glob_0_0 })
).map(
  ([filepath, globEntry]) => {
    return {
      // get the data from each of the .md files
      ...globEntry.metadata,
      meta: parse(filepath)
    };
  }
).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post, index, allPosts) => ({
  ...post,
  next: allPosts[index - 1] || 0,
  previous: allPosts[index + 1] || 0
}));
async function load({ params }) {
  console.log(posts);
  const post = posts.find((post2) => params.slug === post2.title);
  if (!post) {
    throw error(404);
  }
  const component = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/posts/test.md": () => import("../../../../chunks/test.js") }), `../../../lib/posts/${post.meta.name}.md`);
  return {
    post,
    component: component.default,
    layout: {
      fullWidth: true
    }
  };
}
export {
  load
};

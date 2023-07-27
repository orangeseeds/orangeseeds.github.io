const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ fetch, params }) {
  const component = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/posts/post.md": () => import("../../../../chunks/post.js").then((n) => n._) }), `../../../lib/posts/${params.slug}.md`);
  return {
    post: component.metadata,
    component: component.default,
    layout: {
      fullWidth: true
    }
  };
}
export {
  load
};

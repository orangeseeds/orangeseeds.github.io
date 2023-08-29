import { e as error } from "../../../../chunks/index.js";
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
  try {
    const component = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/posts/new_post_testing_progress.md": () => import("../../../../chunks/new_post_testing_progress.js").then((n) => n._), "../../../lib/posts/testing_out_this_new_build.md": () => import("../../../../chunks/testing_out_this_new_build.js").then((n) => n._) }), `../../../lib/posts/${params.slug}.md`);
    return {
      post: component.metadata,
      component: component.default,
      layout: {
        fullWidth: true
      }
    };
  } catch (e) {
    throw error(404);
  }
}
export {
  load
};

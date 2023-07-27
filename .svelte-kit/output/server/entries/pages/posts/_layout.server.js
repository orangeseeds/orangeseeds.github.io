import { _ as __vite_glob_0_0 } from "../../../chunks/testing_out_this_new_build.js";
import { parse } from "path";
const posts = Object.entries(
  /* @__PURE__ */ Object.assign({ "/src/lib/posts/testing_out_this_new_build.md": __vite_glob_0_0 })
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
function load() {
  return {
    posts
  };
}
export {
  load
};

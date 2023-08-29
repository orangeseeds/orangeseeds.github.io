import { g as getAllPosts } from "../../../chunks/posts.js";
function load() {
  return {
    posts: getAllPosts()
  };
}
export {
  load
};

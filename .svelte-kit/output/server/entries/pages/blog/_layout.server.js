const posts = [
  { title: "post #1", body: "body #1", slug: "1" },
  { title: "post #2", body: "body #2", slug: "2" },
  { title: "post #3", body: "body #3", slug: "3" },
  { title: "post #4", body: "body #4", slug: "4" }
];
function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      body: post.body
    }))
  };
}
export {
  load
};

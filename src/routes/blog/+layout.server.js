import { posts } from "$lib/data";

export function load() {
    return {
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title,
            body: post.body
        }))
    };
}

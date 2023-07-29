import { posts } from "$lib/scripts/posts";

export function load() {
    return {
        posts: posts
    };
}

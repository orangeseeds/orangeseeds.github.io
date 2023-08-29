import { getAllPosts } from "$lib/scripts/posts";

export function load() {
    return {
        posts: getAllPosts(),
    };
}

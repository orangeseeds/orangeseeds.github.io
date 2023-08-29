
import { searchPosts } from "$lib/scripts/posts";
import { error } from "@sveltejs/kit";


export async function load({ params }) {
    try {
        const query = params.query;
        const posts = searchPosts(query.replaceAll("_", " "));

        return {
            posts: posts,
            query: query,
        }

    } catch (e) {
        error(404)
    }
}

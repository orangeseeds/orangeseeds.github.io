
import { searchPosts } from "$lib/scripts/posts";
import { error } from "@sveltejs/kit";


export async function load({ params, url }) {
    try {
        const query = url.searchParams.get('search_query');
        const posts = searchPosts(query);

        return {
            posts: posts,
            query: query,
        }

    } catch (e) {
        throw error(500)
    }
}

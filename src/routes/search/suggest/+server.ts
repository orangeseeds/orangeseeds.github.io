import { searchPosts } from "$lib/scripts/posts";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = ({ url }) => {
    try {
        const query = url.searchParams.get('search_query')!;
        const posts = searchPosts(query).map((post) => {
            return {
                title: post.title,
                slug: post.title.replaceAll(" ", "_").toLowerCase(),
                date: post.date,
                tags: post.tags,
                description: post.description,
            }
        }).slice(0, 10);


        return json({
            posts: posts,
            query: query,
        })

    } catch (e) {
        throw error(404)
    }
}

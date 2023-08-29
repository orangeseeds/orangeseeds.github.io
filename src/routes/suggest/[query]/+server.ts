import { searchPosts } from "$lib/scripts/posts";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = ({ params }) => {
    try {
        const query = params.query!;
        const posts = searchPosts(query.replaceAll("_", " ")).map((post) => {
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
        error(404)
    }
}

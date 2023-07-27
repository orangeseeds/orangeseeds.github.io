import { error } from "@sveltejs/kit";
import { posts } from "./posts";

export async function load({ params }) {

    console.log(posts)
    const post = posts.find((post) => params.slug === post.title)

    if (!post) {
        throw error(404)
    }

    const component = await import(`../../../lib/posts/${post.meta.name}.md?raw`);

    return {
        post: post,
        component: component.default,
        layout: {
            fullWidth: true,
        },
    };

}

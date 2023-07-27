import { error } from "@sveltejs/kit";

export async function load({ fetch, params }) {

    // const response = await fetch("api/posts")
    // const posts = await response.json()

    // const post = posts.find((post) => params.slug === post.title)

    // if (!post) {
    //     throw error(404)
    // }
    try {
        const component = await import(`../../../lib/posts/${params.slug}.md`);
        return {
            post: component.metadata,
            component: component.default,
            layout: {
                fullWidth: true,
            },
        };

    } catch (e) {
        throw error(404)
    }
    // const compiled = await compile(component.default)

}

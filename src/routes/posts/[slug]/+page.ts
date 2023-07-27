
export async function load({ fetch, params }) {

    // const response = await fetch("api/posts")
    // const posts = await response.json()

    // const post = posts.find((post) => params.slug === post.title)

    // if (!post) {
    //     throw error(404)
    // }

    const component = await import(`../../../lib/posts/${params.slug}.md`);
    // const compiled = await compile(component.default)

    return {
        post: component.metadata,
        component: component.default,
        layout: {
            fullWidth: true,
        },
    };

}

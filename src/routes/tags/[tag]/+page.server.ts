import { filterPostsByTags } from "$lib/scripts/posts";
import { error } from "@sveltejs/kit";

export async function load({ params }) {

    try {
        return {
            posts: filterPostsByTags([params.tag]),
            tag: params.tag,
        };

    } catch (e) {
        throw error(500)
    }
    // const compiled = await compile(component.default)

}

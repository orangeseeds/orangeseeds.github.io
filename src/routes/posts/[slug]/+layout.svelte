<script lang="ts">
    export let data;
    import RelatedPosts from "$lib/components/RelatedPosts.svelte";
    import type { PostWithAdditional } from "$lib/scripts/posts.js";

    const computedPosts = data.posts.map((post) => {
        return {
            ...post,
            slug: post.title.replaceAll(" ", "_").toLowerCase(),
        } as PostWithAdditional;
    });
</script>

<section class="flex justify-center flex-wrap-reverse pt-10">
    <RelatedPosts posts={computedPosts} />
    <slot />
</section>

<script lang="ts">
    import { base } from "$app/paths";
    export let data;

    const computedPosts = data.posts.map((post) => {
        return {
            ...post,
            slug: post.title.replaceAll(" ", "_").toLowerCase(),
        };
    });
</script>

<h1 class="text-2xl font-bold">Posts with Tag: {data.tag}</h1>

<ol class="max-w-lg">
    {#each computedPosts as post}
        <li type="1" class="text-emerald-600 hover:underline ml-6">
            <a href="{base}/posts/{post.slug}">
                {post.title}
            </a>
        </li>
    {/each}
</ol>

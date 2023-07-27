<script lang="ts">
    import { base } from "$app/paths";

    export let data;
    const posts = data.posts.map((post) => {
        return { ...post, slug: post.title.replaceAll(" ", "_").toLowerCase() };
    });
</script>

<h1 class="text-2xl font-bold">Posts</h1>

<ul>
    {#each posts as post}
        <li class="text-emerald-600 hover:underline">
            <a href="{base}/posts/{post.slug}">
                {post.title}
            </a>
        </li>
    {/each}
</ul>

<script lang="ts">
    import { base } from "$app/paths";
    export let data;
</script>

<h1 class="text-2xl font-bold">Posts with Tag: {data.query}</h1>

<ol class="max-w-lg">
    {#each data.posts as post}
        <li type="1" class="text-emerald-600 hover:underline ml-6">
            <a href="{base}/posts/{post.slug}">
                {post.title}
            </a>
        </li>
    {/each}
</ol>

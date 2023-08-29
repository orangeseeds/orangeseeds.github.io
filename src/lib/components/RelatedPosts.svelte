<script lang="ts">
    import { base } from "$app/paths";
    import type { PostWithAdditional } from "$lib/scripts/posts";
    export let posts: PostWithAdditional[];
</script>

<aside
    class="max-w-xs mr-auto sm:mr-6 sm:max-w-[12rem] font-light space-y-4 text-slate-600"
>
    <h3 class="font-bold">Related Posts</h3>
    <ul class="text-sm font-light space-y-3">
        {#each posts as post}
            <li class="hover:underline">
                <a href="{base}/posts/{post.slug}">
                    <span class="font-medium text-emerald-600">
                        {post.title}
                    </span>
                    <p class="font-light md:text-xs text-sm text-slate-500">
                        {post.description.substring(0, 100)}...
                    </p>
                    <span
                        class="font-extralight md:text-xs text-sm text-slate-400"
                    >
                        {post.date} · {post.readTime}
                    </span>
                </a>
            </li>
        {/each}
    </ul>
</aside>

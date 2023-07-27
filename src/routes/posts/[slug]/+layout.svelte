<script lang="ts">
    import { base } from "$app/paths";
    export let data;

    data.posts = data.posts.map((post) => {
        return {
            ...post,
            slug: post.title.replaceAll(" ", "_").toLowerCase(),
        };
    });
</script>

<section class="flex justify-center flex-wrap-reverse">
    <aside class="max-w-[12rem] mr-6 font-light space-y-4 text-slate-600">
    <h3 class="font-bold">Related Posts</h3>
        <ul class="text-sm font-light space-y-3">
            {#each [1, 2, 3, 4, 5, 6] as a}
                {#each data.posts as post}
                    <li class="hover:underline">
                        <a href="{base}/posts/{post.slug}">
                            <span class="text-emerald-600">
                                {post.title}
                            </span>
                            <p class="font-extralight text-xs text-slate-500">
                                {post.description.substring(0, 100)}...
                            </p>
                                <span class="font-extralight text-xs text-slate-400">
                                    {post.date}
                                </span>
                        </a>
                    </li>
                {/each}
            {/each}
        </ul>
    </aside>

    <div>
        <slot />
    </div>
</section>

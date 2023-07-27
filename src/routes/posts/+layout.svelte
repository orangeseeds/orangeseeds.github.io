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

<section class="flex flex-col items-center">
    <slot />

    <aside>
        <h3>More Posts</h3>
        <ul>
            {#each data.posts as post}
                <li>
                    <a href="{base}/posts/{post.slug}">{post.title}</a>
                </li>
            {/each}
        </ul>
    </aside>
</section>

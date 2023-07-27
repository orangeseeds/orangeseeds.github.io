<script lang="ts">
    import "$lib/app.css";
    export let data;
</script>

<div class="mb-1 max-w-xl">
    <h2 class="mb-1 font-semibold text-3xl">
        {data.post.title}
    </h2>
    <span class="text-sm font-normal text-slate-400 my-2">{data.post.date}</span
    >
    <p class="font-thin text-slate-500 mt-4">
        {data.post.description}
    </p>
</div>
<article
    class="prose prose-slate-900 dark:prose-invert prose-img:rounded-sm prose-a:text-blue-600 prose-p:font-normal max-w-xl"
>
    <svelte:component this={data.component} />
</article>

<!-- <style scoped> -->
<!--     :global(h1) { -->
<!--         color: greenyellow !important; -->
<!--     } -->
<!-- </style> -->

<!-- Prose configs -->
<!-- https://tailwindcss.com/docs/typography-plugin -->

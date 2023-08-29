<script lang="ts">
    import "$lib/app.css";
    import Toc from "$lib/components/TOC.svelte";
    import Tags from "$lib/components/Tags.svelte";
    import { afterUpdate, onDestroy, onMount } from "svelte";
    import { activeTOCElem } from "./store.js";
    import { afterNavigate } from "$app/navigation";
    export let data;

    let toc: HTMLElement[] = [];

    function updateToc() {
        const content: HTMLElement = document.getElementById("article")!;

        // @ts-ignore
        toc = Array.from(content.children).filter((child) => {
            if (child instanceof HTMLHeadingElement) {
                actionWhenInViewport(child);
                return true;
            }
            return false;
        });
    }

    onMount(() => {
        updateToc();
    });

    afterNavigate(() => {
        updateToc();
    });

    let observer: IntersectionObserver;
    function actionWhenInViewport(e: Element) {
        observer = new IntersectionObserver((entries) => {
            if (e instanceof HTMLHeadingElement) {
                if (entries[0].boundingClientRect.top <= 0) {
                    // element in viewport
                    activeTOCElem.set(e);
                }
            }
        }, {});

        observer.observe(e);
    }

    let showScrollToTop = false;

    onDestroy(() => {
        observer?.disconnect();
    });

</script>

<svelte:window
    on:scroll={() => {
        if (window.scrollY > 20) {
            showScrollToTop = true;
        } else {
            showScrollToTop = false;
        }
    }}
/>

<div class="lg:mb-0 mb-24">
    <div class="mb-1 max-w-2xl">
        <h2 class="mb-1 font-semibold text-3xl">
            {data.post.title}
        </h2>
        <span class="text-sm font-normal text-slate-400 my-2"
            >Posted {data.post.date} · {data.post.readTime} read</span
        >
        <p class="font-light text-slate-500 mt-4">
            {data.post.description}
        </p>
    </div>
    <article
        id="article"
        class="prose prose-slate-800 dark:prose-invert prose-img:rounded-sm prose-a:text-blue-600 prose-p:font-normal prose-p:text-md max-w-2xl"
    >
        <svelte:component this={data.component} />
    </article>
</div>

<div class="space-y-8 ml-10">
    <Tags tags={data.post.tags} />
    <Toc {toc} />
</div>

<button
    class="btn btn-circle btn-outline fixed bottom-16 right-14 text-3xl text-center shadow-lg border-slate-200 text-slate-500 hover:bg-slate-600 hover:text-white hidden"
    class:hidden={!showScrollToTop}
    on:click={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        showScrollToTop = false;
    }}
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="text-slate-500 fill-current w-5"
        ><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
        /></svg
    >
</button>

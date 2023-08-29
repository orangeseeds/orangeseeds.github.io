<script lang="ts">
    import { onDestroy } from "svelte";
    import { activeTOCElem } from "../../routes/posts/[slug]/store";
    import { afterNavigate } from "$app/navigation";

    export let toc: HTMLElement[];

    let active = Array<boolean>(toc.length).fill(false);

    const unsub = activeTOCElem.subscribe((data) => {
        //@ts-ignore
        const index = toc.indexOf(data);
        active.fill(false);
        active[index] = true;
        active = active;
    });

    afterNavigate(() => {
        active = active.fill(false);
    });

    onDestroy(() => {
        unsub();
    });
</script>

<div
    class="w-92 max-w-sm sm:max-w-[14rem] font-light space-y-4 text-slate-600 rounded-sm shadow-xs bg-base-100 hidden lg:block sticky top-14"
>
    <h2 class="font-bold">Contents</h2>
    <ol class="text-sm font-light h-40 max-h-screen overflow-y">
        {#each toc as elem, index}
            <button
                class="text-left w-fit hover:underline text-emerald-600 text-sm px-10 border border-0 border-l py-2 hover:border-l-1 hover:border-slate-500"
                class:border-l-2={active[index]}
                class:border-slate-600={active[index]}
                class:font-semibold={active[index]}
                on:click={() => {
                    elem.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
            >
                <li type="1">
                    {elem.innerText}
                </li>
            </button>
        {/each}
    </ol>
</div>

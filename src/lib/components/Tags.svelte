<script lang="ts">
    export let tags: string[];
</script>

<div
    class="max-w-sm sm:max-w-[14rem] font-light text-slate-600 rounded-sm shadow-xs bg-base-100 hidden lg:block"
>
    <h2 class="font-bold mb-5">Tags</h2>
    <div class="flex flex-wrap">
        {#each tags as tag}
            <a
                href="/tags/{tag}"
                class="py-1 px-3 mb-2 rounded-full text-slate-500 text-sm font-medium border border-slate-300 mr-1 hover:cursor-pointer hover:bg-gray-100 hover:underline"
                >{tag}</a
            >
        {/each}
    </div>
</div>

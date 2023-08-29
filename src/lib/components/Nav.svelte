<script lang="ts">
    import { base } from "$app/paths";
    import "$lib/app.css";
    import { onMount } from "svelte";

    let darkMode = false;
    onMount(() => {
        document
            .getElementsByTagName("html")[0]
            ?.setAttribute("data-theme", darkMode ? "halloween" : "light");
    });

    function toggleTheme() {
        darkMode = !darkMode;
        document
            .getElementsByTagName("html")[0]
            ?.setAttribute("data-theme", darkMode ? "halloween" : "light");
    }

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Posts", path: "/posts" },
    ];

    let query = "";
    let loadedRes;
    function sendRequest() {
        fetch(`${base}/suggest/${query.replaceAll(" ", "_")}`).then(
            async (res) => {
                loadedRes = res.json();
            }
        );
    }

    let timeout: number | undefined;
    var debounce = function (func, delay: number | undefined) {
        clearTimeout(timeout);

        timeout = setTimeout(func, delay);
    };

    let loaded = false;
</script>

<nav class="navbar bg-base-100 px-8 py-2">
    <div class="navbar-start font-bold space-x-8">
        {#each navLinks as { name, path }}
            <a
                class="transition-all duration-200 border-y-2 border-transparent hover:border-b-slate-500"
                href={path}>{name}</a
            >
        {/each}
    </div>
    <div class="navbar-end">
        <div class=" max-w-xs relative">
            <input
                type="text"
                class="input input-bordered w-full h-9 text-sm !outline-0"
                bind:value={query}
                placeholder="search..."
                on:keyup={() => {
                    debounce(sendRequest, 200);
                    if (loadedRes != null) {
                        loaded = true;
                    } else {
                        loaded = false;
                    }
                }}
                on:blur={() => {
                    setTimeout(() => {
                        loaded = false;
                    }, 300);
                }}
            />
            <ul
                class="absolute border rounded bg-white top-10 w-full"
                class:hidden={!loaded}
            >
                {#await loadedRes then result}
                    {@const posts = result?.posts ? result.posts : []}
                    {#each posts as post}
                        <li>
                            <a href="{base}/posts/{post.slug}">
                                {post.title}
                            </a>
                        </li>
                    {/each}

                    {#if posts.length == 0}
                        <span>No Post Found..</span>
                    {/if}
                {:catch err}
                    Error.. {err}
                {/await}
            </ul>
        </div>
        <a class="btn btn-ghost btn-circle" href="{base}/search/{query}">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="fill-current w-5"
                ><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                /></svg
            >
        </a>
        <button class="btn btn-ghost btn-circle">
            <label class="swap swap-rotate scale-[60%] w-full h-full">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" on:change={toggleTheme} />

                <!-- sun icon -->
                <svg
                    class="swap-on fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    ><path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                    /></svg
                >

                <!-- moon icon -->
                <svg
                    class="swap-off fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    ><path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                    /></svg
                >
            </label>
        </button>
    </div>
</nav>

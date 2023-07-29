<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { init, clean, App } from "$lib/scripts/globe";
    import {
        zoom,
        animateToLoc,
        stopAllAnimation,
    } from "$lib/scripts/animations";
    import type { Object3D } from "three";
    let root: HTMLDivElement;
    let app: App;
    let globe: Object3D;
    let object: Object3D;
    let darkTheme = false;
    let trySpin: number;
    onMount(() => {
        if (root.childElementCount < 1) {
            app = init({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            root.appendChild(app.canvas);
        }

        resize();
        let attempts = 0;
        trySpin = setInterval(() => {
            if (app.objects.get("globe")) {
                globe = app.objects.get("globe")!;
                object = app.objects.get("object")!;
                zoom(app.camera, globe);
                clearInterval(trySpin);
            } else {
                attempts++;
                if (attempts >= 100) {
                    clearInterval(trySpin);
                    console.error(
                        "Failed to find the 'globe' object after multiple attempts."
                    );
                }
            }
        }, 10);

        onDestroy(() => {
            stopAllAnimation();
            clean();
        });
    });

    function toggleTheme() {
        darkTheme = !darkTheme;
        if (darkTheme) {
            //@ts-ignore
            globe.children[0].material.color.setHex(0x04314c);
            //@ts-ignore
            globe.children[1].material.color.setHex(0x0d100e);
        } else {
            //@ts-ignore
            globe.children[0].material.color.setHex(0x85dfd4);
            //@ts-ignore
            globe.children[1].material.color.setHex(0xa5ed17);
        }
    }

    function resize() {
        app.setSize({
            width: (window.innerWidth * 4) / 5,
            height: (window.innerHeight * 4) / 5,
        });
    }
</script>

<svelte:window on:resize={resize} />

<button class="" on:click={toggleTheme}> Toggle Theme</button>
<button
    class=""
    on:click={() =>
        //@ts-ignore
        animateToLoc(object, app.camera, app.objects.get("animatedRings"))}
>
    Simulate A Message
</button>

<div
    id="canvasContainer"
    class="flex flex-row-reverse justify-center min-h-[100vh] relative
    "
    bind:this={root}
/>

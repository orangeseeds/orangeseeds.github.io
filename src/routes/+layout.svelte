<script>
    import Footer from "./Footer.svelte";
    import Nav from "./Nav.svelte";
</script>

<div class="relative min-h-[100vh]">
    <Nav />

    <main class="px-8 py-5 mb-6">
        <slot />
    </main>

    <Footer />
</div>

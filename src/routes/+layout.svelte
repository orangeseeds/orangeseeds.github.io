<script>
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="relative min-h-[100vh]">
    <Nav />

    <main class="mb-6">
        <slot />
    </main>

    <Footer />
</div>

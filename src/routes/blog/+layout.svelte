<script lang="ts">
	import { base } from '$app/paths';
	export let data;
</script>

<div class="layout">
	<main>
		<slot />
	</main>
</div>

<aside>
	<h3>More Posts</h3>
	<ul>
		{#each data.summaries as { slug, title }}
			<li>
				<a href="{base}/blog/{slug}">{title}</a>
			</li>
		{/each}
	</ul>
</aside>

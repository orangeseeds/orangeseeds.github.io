<script lang="ts">
	import { base } from '$app/paths';
	export let data;
</script>

{#each data.summaries as post}
	<a href="{base}/blog/{post.slug}">
		<h1>
			{post.title}
		</h1>
	</a>
{/each}

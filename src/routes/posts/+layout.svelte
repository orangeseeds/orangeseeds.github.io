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
		{#each data.posts as post}
			<li>
				<a href="{base}/posts/{post.title}">{post.title}</a>
			</li>
		{/each}
	</ul>
</aside>

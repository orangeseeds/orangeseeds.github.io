<script lang="ts">
	export let data;
</script>

<h1>
	This is a blog page for {data.post?.title}
</h1>

<p>
	{data.post?.body}
</p>

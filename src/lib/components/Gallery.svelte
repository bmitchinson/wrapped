<script>
	import Youtube from './Youtube.svelte';

	export let id = 0;
</script>

<div class="flex flex-col items-center">
	ID: {id}
	<Youtube videoID={'gEmxGB40ipo'} />
	<button class="max-w-32 mt-4">New Song</button>
</div>

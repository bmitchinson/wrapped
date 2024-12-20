<script>
	import { artists2024 } from "$lib/notes/2024/artists";
	import { onMount } from "svelte";

	const randomSongIndex = Math.floor(Math.random() * artists2024.length);
	onMount(() => {
		window.location.href = `/2024/${randomSongIndex}`;
	});
</script>

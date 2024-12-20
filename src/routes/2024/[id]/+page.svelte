<script>
	import SideBar2024 from '$lib/components/SideBar2024.svelte';
	import Youtube from '$lib/components/Youtube.svelte';
	import { songs2024 } from '$lib/notes/2024/songs';

	export let data;
	const song = songs2024[data.id];
</script>

<div class="flex flex-row flex-wrap p-8 justify-center gap-16">
	<SideBar2024 />

	<div class="w-96 flex flex-col">
		<div class="text-lg flex flex-row align-base text-left">
			<div class="font-bold mr-2">Title:</div>
			<div>{song.title}</div>
		</div>
		<div class="text-lg flex flex-row align-base text-left">
			<div class="font-bold mr-2">Artist:</div>
			<div>{song.artist}</div>
		</div>
		<div class="mt-4">
			<Youtube videoID={song.ytId} />
			<button class="max-w-32 mt-4">New Song</button>
		</div>
	</div>
</div>

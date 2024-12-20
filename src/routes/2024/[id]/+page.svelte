<script>
	import SideBar2024 from "$lib/components/SideBar2024.svelte";
	import Youtube from "$lib/components/Youtube.svelte";
	import { linkClasses } from "$lib/cssUtils";
	import { artists2024 } from "$lib/notes/2024/artists";

	export let data;
	const song = artists2024[data.id];
</script>

<div class="flex flex-row flex-wrap p-8 justify-center gap-16">
	<SideBar2024 />

	<div class="w-96 flex flex-col">
		<div class="text-lg flex flex-col align-base text-left">
			<div class="flex flex-row">
				<div class="font-bold mr-2">artist:</div>
				<div>{song.artist}</div>
			</div>
			{#if song.social}
				<div class="">
					<a class={linkClasses} href={song.social}>{song.social}</a>
				</div>
			{/if}
			{#each song.tracks as track}
				<div class="flex flex-row">
					<div class="font-bold mr-2">title:</div>
					<div>{track.year ? `${track.title} - ${track.year}` : track.title}</div>
				</div>

				<Youtube videoID={track.ytId} />
			{/each}
		</div>

		<div class="mt-4">
			<ul class="list-disc list-inside mt-2 p-0 space-y-2">
				{#each song.notes as note}
					<li class="p-0">{@html note}</li>
				{/each}
			</ul>
			{#each song.images as img}
				<img class="w-full" src={img.src} />
			{/each}
			<button class="align-right max-w-32">Another Song</button>
		</div>
	</div>
</div>

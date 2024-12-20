<script lang="ts">
	import SideBar2024 from "$lib/components/SideBar2024.svelte";
	import Youtube from "$lib/components/Youtube.svelte";
	import { linkClasses } from "$lib/cssUtils";
	import { artists2024 } from "$lib/notes/2024/artists";
	import { onMount } from "svelte";

	export let data;
	const song = artists2024[data.id];

	let anotherSongClick = () => {};
	let unlock1 = false;

	onMount(() => {
		const unlock1OnLoad = localStorage.getItem("unlock1");
		const THREE_MIN_MS = 1000 * 60 * 3;
		if (unlock1OnLoad && Date.now() - parseInt(unlock1OnLoad) < THREE_MIN_MS) {
			(document.getElementById("unlock1ele") as unknown as HTMLElement).classList.remove("hidden");
		}

		let pagesLeft = artists2024.map((_, i) => i).filter((i) => i !== data.id);
		let visitedOnLoad = localStorage.getItem("visited");
		if (!visitedOnLoad) {
			localStorage.setItem("visited", JSON.stringify([data.id]));
		} else {
			let visited = JSON.parse(visitedOnLoad) as Array<Number>;
			visited.push(data.id);
			if (visited.length >= artists2024.length) {
				localStorage.setItem("unlock1", Date.now().toString());
				visited = [data.id];
			}
			localStorage.setItem("visited", JSON.stringify(visited));
			pagesLeft = Array.from({ length: artists2024.length }, (_, i) => i).filter(
				(key) => !visited.includes(key)
			);
		}

		anotherSongClick = () => {
			const randomKey = pagesLeft[Math.floor(Math.random() * pagesLeft.length)];
			location.href = `/2024/${randomKey}`;
		};

		console.log("left:", pagesLeft);
		console.log("visited:", visitedOnLoad);
		console.log("unlockTime:", unlock1OnLoad);
	});
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
			<button onclick={anotherSongClick} class="align-right max-w-32">Another Song</button>
			<button id="unlock1ele" onclick={() => (location.href = "/2024/notes")} class="hidden"
				>Recordings / Photos</button
			>
		</div>
	</div>
</div>

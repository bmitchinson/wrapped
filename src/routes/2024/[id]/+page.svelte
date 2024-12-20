<script>
	import Gallery from '$lib/components/Gallery.svelte';
	import SideBar2024 from '$lib/components/SideBar2024.svelte';

	export let data;
</script>

<div class="flex flex-row flex-wrap p-8 justify-center gap-16">
	<SideBar2024 />

	<div class="w-96">
		<Gallery id={data.id} />
	</div>
</div>

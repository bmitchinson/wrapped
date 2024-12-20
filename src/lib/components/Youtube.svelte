<script>
	export let videoID = '';
</script>

<div class="relative w-full" style="padding-top: 56.25%">
	<iframe
		class="absolute inset-0 w-full h-full"
		src={`https://www.youtube-nocookie.com/embed/${videoID}`}
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
</div>

<script>
	import { songs2024 } from '$lib/notes/2024/songs';

	const randomSongIndex = Math.floor(Math.random() * songs2024.length);
	window.location.href = `/2024/${randomSongIndex}`;
</script>

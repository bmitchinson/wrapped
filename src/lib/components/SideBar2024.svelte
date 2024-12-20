<script>
	import { linkClasses } from '$lib/cssUtils';
</script>

<div class="w-72 space-y-4">
	<p class="font-bold text-lg">Favorite music + notes from 2024</p>
	<p>
		my spotify top 100 -
		<a
			class={linkClasses}
			href="https://open.spotify.com/playlist/37i9dQZF1FozDwEcx7i4v4?si=7d7c534477f242bd"
		>
			spotify</a
		>
		-
		<a class={linkClasses} href="https://music.apple.com/us/playlist/2024/pl.u-8aAVXZjT4Z"
			>youtube</a
		>
	</p>

	<p>
		Import from bandcamp into spotify - <a
			class={linkClasses}
			href="https://support.spotify.com/us/article/local-files/">guide</a
		>
		<br />
		If you love a song consider buying it on bandcamp
	</p>
	<div>
		<details>
			<summary
				>90/10 fan-centric payment model - <a
					class={linkClasses}
					href="https://youtu.be/RJBwI3tAmio?si=KdPOq89fOIlV-HnU&t=383">yt link 6:23</a
				>
			</summary>

			<ul class="list-disc list-inside mt-2 space-y-2">
				<li class="">
					You listened to 5 artists this month? Your streaming $$$ should automatically go to the
					app and those 5 artists only
				</li>
				<li class="">
					A monthly subscription to James Blake <a
						class={linkClasses}
						href="https://www.theguardian.com/music/2024/mar/25/james-blakes-music-subscription-model-is-a-fantasy-that-disadvantages-fans-and-musicians"
						>isn’t the answer imo</a
					>
				</li>
			</ul>
		</details>
	</div>
</div>

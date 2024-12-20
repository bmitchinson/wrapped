<script>
	import { linkClasses } from "$lib/cssUtils";
</script>

<div class="flex flex-col w-72 gap-2">
	<div>
		my spotify top 100 -
		<a
			class={linkClasses}
			href="https://open.spotify.com/playlist/37i9dQZF1FozDwEcx7i4v4?si=7d7c534477f242bd"
		>
			spotify</a
		>
		-
		<a
			class={linkClasses}
			href="https://www.youtube.com/playlist?list=PLhalHOaCa9Wg_YejtyTCZafLdSLeywscX">youtube</a
		>
	</div>

	<div>
		Import from bandcamp into spotify - <a
			class={linkClasses}
			href="https://support.spotify.com/us/article/local-files/">guide</a
		>
		<br />
		If you love a song consider buying it on bandcamp
	</div>
	<div>
		<details>
			<summary
				>90/10 fan-centric payment model - <a
					class={linkClasses}
					href="https://youtu.be/RJBwI3tAmio?si=KdPOq89fOIlV-HnU&t=383">yt link 6:23</a
				>
			</summary>

			<ul class="list-disc list-inside mt-2 p-0 space-y-2">
				<li class="">
					If you listen to 5 artists in a month, your streaming $$$ should automatically go to the
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

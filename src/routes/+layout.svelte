<script>
	import { linkClasses } from '$lib/cssUtils';
	import '../app.css';
</script>

<header class="my-4 mx-8 text-2xl flex flex-row items-center space-x-4">
	<a href="/2024" class={linkClasses}>2024</a>
</header>

<hr class="mt-4 mb-8 w-full border-t border-gray-300" />

<div class="flex flex-col items-center justify-between">
	<slot />
</div>

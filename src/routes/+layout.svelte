<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import '@unocss/reset/tailwind.css';
	import 'virtual:uno.css';
	import '../app.css';
	import Header from './Header.svelte';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="app">
	<Header />

	<main id="main">
		<slot />
	</main>

	<footer class="bg-base-2">
		<div>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	@keyframes fade-in {
		from {
			filter: blur(4px);
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			filter: blur(4px);
			opacity: 0;
		}
	}

	:root:view-transition-old(root) {
		animation: 0.5s both fade-out;
	}

	:root::view-transition-new(root) {
		animation: 0.5s both fade-in;
	}
</style>

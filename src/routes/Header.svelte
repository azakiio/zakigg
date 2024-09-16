<script lang="ts">
	import { page } from '$app/stores';
	import { useTheme } from '$lib/components/Theme/theme.svelte';
	import { clamp } from '$lib/utils';
	import Icon from '@iconify/svelte';

	const theme = useTheme();
	const links = [
		{ label: 'Home', path: '/', icon: 'hugeicons:home-02' },
		{ label: 'Resume', path: '/resume', icon: 'hugeicons:suit-02' },
		{ label: 'Crafts', path: '/crafts', icon: 'hugeicons:pencil' },
		{ label: 'Projects', path: '/projects', icon: 'hugeicons:idea-01' }
	];
	const socials = [
		{ label: 'GitHub', path: 'https://github.com/azakiio', icon: 'hugeicons:github-01' },
		{
			label: 'LinkedIn',
			path: 'https://linkedin.com/in/adhamzaki/',
			icon: 'hugeicons:linkedin-01'
		},
		{ label: 'Mail', path: 'mailto:a@zaki.gg', icon: 'hugeicons:mail-01' }
	];

	let isHidden = $state(false);

	$effect(() => {
		const dock = document.querySelector('.dock') as HTMLElement;
		dock.addEventListener('mousemove', (e) => {
			if ('ontouchstart' in window || navigator.maxTouchPoints) {
				return;
			}
			const dockItems = document.querySelectorAll('.dock-item') as NodeListOf<HTMLElement>;

			dockItems.forEach((item) => {
				const { left, width } = item.getBoundingClientRect();
				const itemCenter = left + width / 2;
				const mouseX = e.clientX;
				const distance = Math.abs(itemCenter - mouseX);
				const scale = clamp(2 - distance / 100, 1, 2); // Adjust scaling effect
				item.animate(
					{ width: `${scale * 3}rem`, height: `${scale * 2.5}rem` },
					{
						duration: 500,
						fill: 'forwards'
					}
				);
			});
		});

		dock.addEventListener('mouseleave', () => {
			const dockItems = document.querySelectorAll('.dock-item') as NodeListOf<HTMLElement>;
			dockItems.forEach((item) => {
				item.animate(
					{ width: `${3}rem`, height: `${2.5}rem` },
					{
						duration: 100,
						fill: 'forwards'
					}
				);
			});
		});
	});
</script>

<header
	class="fixed bottom-4 w-fit z-999 flex bg-base-3/70 rounded-full p-2 dock left-1/2 backdrop-blur items-end h-14 print:hidden"
	style:translate="-50% {isHidden ? '200%' : '0%'}"
>
	{#each links as link}
		<a href={link.path} class="dock-item" class:text-primary={link.path === $page.url.pathname}>
			<div class="tooltip">
				{link.label}
			</div>
			<Icon icon={link.icon} class="w-full h-full"></Icon>
		</a>
	{/each}
	<div class="w-1px bg-base-content/25 h-3/4 my-a"></div>
	{#each socials as social}
		<a href={social.path} class="dock-item" target="_blank">
			<div class="tooltip">
				{social.label}
			</div>
			<Icon icon={social.icon} class="w-full h-full"></Icon>
		</a>
	{/each}
	<div class="w-1px bg-base-content/25 my-auto h-3/4"></div>

	<button class="dock-item" onclick={theme.toggle}>
		<div class="tooltip">Toggle Theme</div>
		<Icon
			icon={theme.theme === 'light' ? 'hugeicons:moon-02' : 'hugeicons:sun-01'}
			class="w-full h-full"
		/>
	</button>

	<button class="dock-item" onclick={() => (isHidden = true)}>
		<div class="tooltip">Close Dock</div>
		<Icon icon="hugeicons:cancel-01" class="w-full h-full"></Icon>
	</button>
</header>
<div
	class="fixed bottom-4 right-4 z-999 transition-property-[translate] duration-0.3s print:hidden"
	style:translate="0% {isHidden ? '0%' : '200%'}"
>
	<button class="btn variant-primary p-2 rounded-full shadow-lg" onclick={() => (isHidden = false)}>
		<Icon icon="pepicons-print:menu" class="w-6 h-6"></Icon>
	</button>
</div>

<style scoped>
	a:hover > .label {
		opacity: 1;
		scale: 1 1;
	}

	a:hover > .icon {
		opacity: 1;
		scale: 1.2;
	}

	.label {
		bottom: 100%;
		position: absolute;
		opacity: 0;
		scale: 1 0;
		will-change: scale, opacity;
		transition:
			scale 0.4s,
			opacity 0.4s;
		transform-origin: bottom;
	}

	.dock-container {
		@apply flex justify-center items-center w-full;
	}

	.dock {
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
		transition: translate 0.3s;
		transform-origin: bottom;
	}

	.dock-item {
		@apply relative rounded-full w-12 h-10 p-0.5 font-bold;
		/* will-change: width, height;
    transition-property: width, height;
    transition-duration: 0.1s; */
	}

	.tooltip {
		@apply hidden absolute bottom-full left-1/2 transform -translate-x-1/2 bg-base-8 text-base-0 px-2 py-1 rounded-md text-xs whitespace-nowrap;
	}

	.dock-item:hover .tooltip {
		display: block;
	}
</style>

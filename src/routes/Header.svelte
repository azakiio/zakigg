<script lang="ts">
	import { page } from '$app/stores';
	import { useTheme } from '$lib/components/Theme/theme.svelte';
	import { clamp } from '$lib/utils';
	import Icon from '@iconify/svelte';

	const theme = useTheme();
	const links = [
		{ label: 'Home', path: '/', icon: 'line-md:home' },
		{ label: 'Resume', path: '/resume', icon: 'line-md:file-document' },
		{ label: 'Crafts', path: '/crafts', icon: 'line-md:pencil' },
		{ label: 'Projects', path: '/projects', icon: 'line-md:lightbulb' }
	];
	const socials = [
		{ label: 'GitHub', path: 'https://github.com/azakiio', icon: 'line-md:github' },
		{
			label: 'LinkedIn',
			path: 'https://linkedin.com/in/adhamzaki/',
			icon: 'line-md:link'
		},
		{ label: 'Mail', path: 'mailto:a@zaki.gg', icon: 'line-md:email' }
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
	class="fixed bottom-4 w-fit z-999 flex bg-base-2/70 rounded-full p-2 dock left-1/2 backdrop-blur items-end h-14 print:hidden"
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
		<Icon icon={theme.theme === 'light' ? 'line-md:moon' : 'line-md:sunny'} class="w-full h-full" />
	</button>

	<button class="dock-item" onclick={theme.toggleHue}>
		<div class="tooltip">Toggle Color</div>
		<!-- <div class="aspect-square h-full rounded-full"></div> -->
    <Icon icon="line-md:paint-drop-filled" class="w-full h-full" style="color: var(--color-4)" ></Icon>
	</button>

	<button class="dock-item" onclick={() => (isHidden = true)}>
		<div class="tooltip">Close Dock</div>
		<Icon icon="line-md:close-circle" class="w-full h-full"></Icon>
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
	.dock {
		/* box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
     */
		box-shadow: var(--shadow-2);
		transition: translate 0.3s;
		transform-origin: bottom;
	}

	.dock-item {
		@apply relative rounded-full w-12 h-10 p-0.5 font-bold flex items-center justify-center;
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

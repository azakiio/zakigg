<script lang="ts">
	import Icon from '@iconify/svelte';

	type Item = {
		title: string;
		link: string;
		children: {
			title: string;
			description: string;
			link: string;
			external?: boolean;
		}[];
	};
	const projects: Item = {
		title: 'Projects',
		link: '/projects',
		children: [
			{
				title: 'TurboMenu',
				description: 'A free tool for restaurants to create QR code menus',
				link: 'https://turbo.menu',
				external: true
			},
			{
				title: 'Nice Buttons',
				description: 'Generate beautiful gradient hover effects',
				link: 'https://nicebuttons.com',
				external: true
			},
			{
				title: 'Quickset.online',
				description: 'A real-time, multiplayer card game',
				link: 'https://quickset.online',
				external: true
			}
		]
	};

	const crafts: Item = {
		title: 'Crafts',
		link: '/crafts',
		children: [
			{
				title: 'Tic Tac Toe',
				description: 'How do computers play games?',
				link: '/crafts/tic-tac-toe'
			},
			{
				title: 'Scrolling Tabs',
				description: 'My attempt at tackling this common design pattern.',
				link: '/crafts/scrolling-tabs'
			},
			{
				title: '🪨📄✂️ VS AI',
				description: 'Play Rock, Paper, Scissors vs AI',
				link: '/crafts/rock-paper-scissors'
			}
		]
	};
</script>

<article class="layout max-w-2xl">
	<h1 class="text-xl">Adham Zaki</h1>
	<p>
		<em>Crafting interfaces.</em> Building polished software and web experiences. Experimenting with
		magical details in user interfaces. Founder of
		<a href="https://siteful.io" target="_blank">siteful.io.</a>
	</p>

	<div class="grid sm:grid-cols-2 gap- mt-4">
		<div>
			<h6 class="text-base-8 mb-2 font-bold">{crafts.title}</h6>
			{#each crafts.children as { title, link, description, external }}
				<div class="mb-3">
					<div class="flex items-center gap-1">
						<a
							class="w-fit text-primary border-b border-primary font-medium"
							target={external ? '_blank' : undefined}
							href={link}
						>
							{title}
						</a>
						{#if external}
							<Icon icon="ep-top-right" class="text-base-content/40" />
						{/if}
					</div>
					<div class="text-base-6">{description}</div>
				</div>
			{/each}
		</div>
		<div>
			<h6 class="text-base-8 mb-2 font-bold">{projects.title}</h6>
			{#each projects.children as { title, link, description, external }}
				<div class="mb-3">
					<div class="flex items-center gap-1">
						<a
							class="text-primary border-b border-primary w-fit font-medium"
							target="external ? '_blank' : undefined"
							href={link}
							>{title}
						</a>
						{#if external}
							<Icon icon="ep-top-right" class="text-base-content/40" />
						{/if}
					</div>
					<div class="text-base-6">{description}</div>
				</div>
			{/each}
		</div>
	</div>

	<h2 class="text-lg">Now</h2>
	<p>
		Developing skill through doing, guiltlessly exploring passion and interests, imbuing quality.
		Mindful that
		<em>everything around me is someone’s life work.</em>
	</p>
	<p>
		I love building websites. Typography, motion design, copywriting, performance — the web is an
		endless medium of opportunity and creativity of which I’ve only scratched the surface.
	</p>
	<h2 class="text-lg">Connect</h2>
	<p>
		Reach me at <a href="mailto:a@zaki.gg">a@zaki.gg</a> or read more on
		<a href="/resume">my resume.</a>
	</p>
</article>

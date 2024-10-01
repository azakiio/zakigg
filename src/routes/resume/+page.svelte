<script lang="ts">
	import Icon from '@iconify/svelte';
	import { title } from 'radash';
	import Card from './Card.svelte';
	import { experiences, hobbies, projects, skills } from './data';
</script>

<div
	class="layout gap-x-4 gap-y-8 p-4 items-start md:grid-cols-2"
>
	<div class="col-span-full grid justify-center gap-2">
		<h1 class="text-center grid grid-cols-[auto_auto] justify-center mb-0">
			<span class="font-extralight mr-2">Adham</span>
			<span class="font-semibold">Zaki</span>
		</h1>

		<div class="flex gap-2 items-center">
			{#each hobbies as hobby}
				<div
					class="flex-shrink-0 w-10 h-10 grid border-1.5 border-primary rounded-full p-2 shadow"
					title={hobby.label}
				>
					{#if hobby.link}
						<a href={hobby.link} target="_blank" class="w-full h-full">
							<Icon icon={hobby.icon} class="w-full h-full text-primary" />
						</a>
					{:else}
						<Icon icon={hobby.icon} class="w-full h-full" />
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<section class="grid gap-4">
		<h2>Skills</h2>
		{#each Object.entries(skills) as [key, items]}
			<div>
				<h4 class="mb-2">{title(key)}</h4>
				<div class="flex flex-wrap gap-2">
					{#each items as item}
						<div
							class="flex gap-1 border-1.5 px-2 py-1 border-primary items-center font-medium rounded-full shadow"
						>
							<Icon icon={item.icon} class="flex-shrink-0 h-4 w-4" />
							{item.label}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</section>

	<section class="grid gap-4">
		<h2>Projects</h2>
		<div class="grid gap-4">
			{#each projects as project}
				<Card {...project} compact={true} />
			{/each}
		</div>
	</section>

	<section class="grid gap-4 col-span-full">
		<h2>Experience</h2>
		<div
			class="max-w-full grid overflow-auto gap-6 pb-4"
			style="grid-template-columns: repeat({experiences.length}, 500px);"
		>
			{#each experiences as experience}
				<Card {...experience} />
			{/each}
		</div>
	</section>

	<!-- <section>
		<h2>Education</h2>

		<Card {...education} compact={true} />
	</section> -->
</div>

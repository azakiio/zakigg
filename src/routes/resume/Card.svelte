<script lang="ts">
	import Icon from '@iconify/svelte';
	import markdownIt from 'markdown-it';
	import mdAttr from 'markdown-it-attrs';

	const md = new markdownIt().use(mdAttr);
	const data: {
		icon?: string;
		company: string;
		positions?: {
			role: string;
			startDate: string;
			endDate?: string;
		}[];
		description: string[];
		link?: string;
		compact?: boolean;
	} = $props();

	const formatDate = (date?: string) => {
		if (!date) return 'Present';

		return new Date(date).toLocaleString(undefined, {
			month: 'short',
			year: 'numeric'
		});
	};
</script>

<div class="border-1.5 border-primary gap-4 p-4 rounded-xl shadow">
	<a
		href={data.link}
		class="flex items-center justify-center gap-2 text-base-content border-b-0 w-fit mx-a mb-2"
		target="_blank"
	>
		<img src={data.icon} alt="icon" class="w-8 h-8 flex-shrink-0" />

		<svelte:element this={data.compact ? 'h4' : 'h3'} class="font-semibold mb-0">
			{data.company}
		</svelte:element>

		{#if data.link}
			<Icon icon="mdi:external-link" class="w-4 h-4 self-start" />
		{/if}
	</a>

	{#if data.positions}
		<div class="text-center pb-2">
			{#each data.positions as position}
				<div class="flex justify-between gap-1 text-sm">
					<span class="text-primary font-medium">{position.role}</span>
					<span>
						{formatDate(position.startDate)} - {formatDate(position.endDate)}
					</span>
				</div>
			{/each}
		</div>
	{/if}

	<div class="mb-0">
		{#each data.description as item}
			<div class="relative flex gap-2 not-last:mb-1">
				<Icon icon="fa6-solid:circle-dot" class="text-primary w-3 flex-shrink-0 mt-1" />
				<p>
					{@html md.renderInline(item)}
				</p>
			</div>
		{/each}
	</div>
</div>

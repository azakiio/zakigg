<script lang="ts">
	import hotPockets from './data/hot-pocket.yaml?raw';
	import { parse } from 'yaml';

	type Recipe = {
		id: string;
		name: string;
		ingredients: string[];
		steps: string[];
	};

	const test = parse(hotPockets) as Recipe;
</script>

<main class="layout grid gap-4">
	<h1 class="H1">{test.name}</h1>
	<h2 class="H3">Ingredients</h2>
	<ul class="list-disc pl-4">
		{#each test.ingredients as ingredient}
			<li>{ingredient}</li>
		{/each}
	</ul>
	<h2 class="H3">Steps</h2>
	<ul class="list-disc pl-4">
		{#each test.steps as step}
			<li>{step}</li>
		{/each}
	</ul>
</main>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { useTheme } from './theme.svelte';

	const theme = useTheme();
</script>

<button class="w-full h-full" onclick={theme.toggle}>
	<Icon
		icon={theme.theme === 'light' ? 'hugeicons:moon-02' : 'hugeicons:sun-01'}
		class="w-full h-full"
	/>
</button>

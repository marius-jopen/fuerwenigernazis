<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import Footer from '$lib/footer.svelte';

	export let data;
</script>

<SliceZone slices={data.page.data.slices} {components} />

{#if data.footer}
	<Footer data={data.footer} />
{/if}		

<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';
	export let slice: Content.LogosSlice;
</script>

<section class="pt-60">
	<div class="text-center pb-8">
		{slice.primary.headline}
	</div>

	<div class="grid grid-cols-2 lg:grid-cols-4 gap-8 px-8 pt-16">
		{#each slice.primary.items as item}
			<div class="pt-8 lg:pt-0">
				<PrismicImage class="w-full aspect-[16/9] object-contain grayscale" field={item.image} />
			</div>
		{/each}
	</div>
</section>

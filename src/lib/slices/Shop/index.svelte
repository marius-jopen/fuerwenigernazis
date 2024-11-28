<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let slice: Content.ShopSlice;
</script>

<section class="pt-40">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 ">
		{#each slice.primary.items as item}
			<div class="pt-8 lg:pt-0">
				<PrismicImage field={item.image} />

				<div class="text-2xl text-center pt-2">
					{item.text}
				</div>
			</div>
		{/each}
	</div>
</section>

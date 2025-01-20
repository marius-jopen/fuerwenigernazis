<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	import ShopifyButton from '$lib/shopify.svelte';
	export let slice: Content.ShopSlice;
</script>

<section class="pt-40">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 ">
		<!-- <ShopifyButton productId="{slice.primary.items[1].shop_code}" buttonText="{slice.primary.add_to_cart_text}" /> -->
		<!-- 10407460700491 -->
		{#each slice.primary.items as item}
			<div class="pt-8 lg:pt-0 relative">
				<PrismicImage field={item.image} />

				<div class="text-2xl text-center pt-4">
					{item.text}
				</div>

				<div class="px-8 text-center md:px-0 w-full md:w-8/12 lg:w-6/12 mx-auto text-lg">
					<PrismicRichText field={item.more_info} />
				</div>
				
				<div class="pt-4 flex w-full justify-center">
					<ShopifyButton productId="{item.shop_code}" buttonText="{slice.primary.add_to_cart_text}" />
				</div>
			</div>
		{/each}
	</div>
</section>

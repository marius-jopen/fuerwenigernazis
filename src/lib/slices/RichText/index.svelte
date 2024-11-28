<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';

	export let slice: Content.RichTextSlice;
</script>

<section class="pt-20">
	<div class="px-8 md:px-0 w-full md:w-8/12 lg:w-6/12 mx-auto text-xl md:text-2xl">
		<PrismicRichText field={slice.primary.content} />
	</div>
</section>

<script lang="ts">
	import type { Content } from '@prismicio/client';

	export let slice: Content.OpenerSlice;

	// Split text into three parts
	let [line1 = '', line2 = '', line3 = ''] = slice.primary.text.split(' ').reduce((acc, word, i, arr) => {
		const third = Math.ceil(arr.length / 3);
		const lineIndex = Math.floor(i / third);
		acc[lineIndex] = (acc[lineIndex] || '') + (i % third === 0 ? '' : ' ') + word;
		return acc;
	}, [] as string[]);
</script>

<section class="pt-40 pb-8">
	<div class="font-display text-[22vw] lg:text-[17vw] leading-[0.8] uppercase text-center">
		<div>{line1}</div>
		<div>{line2}</div>
		<div>{line3}</div>
	</div>
</section>

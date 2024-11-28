<script>
    import { PrismicLink } from '@prismicio/svelte';

    export let data;
    console.log(data);
</script>

<div class="pt-20">
    <div class="flex flex-wrap gap-4 justify-center pt-40 pb-10">
        {#each data.data.items as item}
            <PrismicLink field={item.link} />
        {/each}
    </div>
</div>
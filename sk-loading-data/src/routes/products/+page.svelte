<script>
    // import Product from './product.svelte'
    export let data;
    const {title, products, Component} = data
</script>

<h1>{title}</h1>
{#each products as product}
<div>
    <Component {product} />
</div>
{/each}
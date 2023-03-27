<script>
    export let data;
    const {title, products} = data
</script>

<h1>{title}</h1>
{#each products as product}
<div>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <hr/>
</div>
{/each}
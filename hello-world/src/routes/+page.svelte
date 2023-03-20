<script>
    import {goto, beforeNavigate, afterNavigate} from "$app/navigation"
    const handleClick = () =>{
        console.log('Placing your order');
        goto('/products');
    }
    beforeNavigate((nav)=>{console.log({before: nav})});
    afterNavigate((nav)=>{console.log({after: nav})});
</script>

<h1>Welcome Home!</h1>
<a href='/blog'>Blog</a>
<a href='/products'>Products</a>

<button on:click={handleClick}>Place Order</button>
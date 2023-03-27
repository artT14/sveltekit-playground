// UNIVERSAL LOAD FUNCTION
import Product from './product.svelte'

export const load = async (loadEvent) =>{
    console.log("Load func called in +page.js")
    const { data } = loadEvent;
    return {
        ...data,
        Component: Product
    }
}
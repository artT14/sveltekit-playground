// UNIVERSAL LOAD FUNCTION
import Product from './product.svelte'

export const load = async (loadEvent) =>{
    console.log("Load func called in +page.js")
    const notification = 'End of season sale!';
    const { data } = loadEvent;
    return {
        ...data,
        Component: Product,
        notification
    }
}
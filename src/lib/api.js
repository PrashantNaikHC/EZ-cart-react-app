
export async function getAllProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    if(!response.ok) {
        throw new Error(data.message || 'Could not fetch products')
    }
    return data;
}

export async function getProductById(productId) {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await response.json();
    if(!response.ok) {
        throw new Error(data.message || 'Could not fetch products')
    }
    return data;
}
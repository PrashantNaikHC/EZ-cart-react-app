
export function getAllProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    if(!response.ok) {
        throw new Error(data.message || 'Could not fetch products')
    }
    const data = await response.json();
    return data;
}

export function getProductById(productId) {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    if(!response.ok) {
        throw new Error(data.message || 'Could not fetch products')
    }
    const data = await response.json();
    return data;
}
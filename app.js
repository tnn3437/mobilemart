document.addEventListener('DOMContentLoaded', function () {
    const productsElement = document.getElementById('products');
    const products = [
        { name: 'Phone Model A', description: 'A great phone with an amazing camera' },
        { name: 'Phone Model B', description: 'An affordable phone with all the features you need' }
    ];

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p>`;
        productsElement.appendChild(productElement);
    });
});

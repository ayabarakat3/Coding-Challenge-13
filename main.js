fetch('https://www.course-api.com/javascript-store-products')
.then(response => response.json()) 
// Code set to fetch the product data from API.
// Response was then converted to json.
.then(data => {
console.log(data);
// Code meant to log data.

// Get the container where products will be displayed
const productContainer = document.getElementById('product-container');
    


displayProducts(data); // Call function to display products
})
.catch(error => {
console.error('Error loading products:', error); // Log any errors
document.getElementById('product-container').innerText = 'Failed to load products. Please try again later.'; // Show error message
});

// Function to display the products
function displayProducts(data) {
const productContainer = document.getElementById('product-container'); // Get the container

// Loop through each product and display its details
data.forEach(product => {
const productDiv = document.createElement('div'); // Create a div for each product
productDiv.innerHTML = `
<h2>${product.name}</h2>
<p>Company: ${product.company}</p>
<p>Price: $${product.price}</p>
<img src="${product.image}" alt="${product.name}" />`;
// Add product details to the div
productContainer.appendChild(productDiv); // Add the product div to the container
});
}


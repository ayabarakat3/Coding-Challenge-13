fetch('https://www.course-api.com/javascript-store-products')
.then(response => {
if (!response.ok) {
throw new Error('Network response was not successful');}
return response.json();})
// Code set to fetch the product data from API.
// Response was then converted to json.
.then(data => {
console.log(data);
// Code meant to log data.

let productContainer = document.getElementById('product-container');
// Code set to find items by id in product container.
displayProducts(data);})
// Code meant to display the products.

.catch(error => {
console.error('Error loading products:', error); 
// Code meant to catch any errors found and log them. 
const errorMessage = document.getElementById('error-message');
errorMessage.innerText = 'Failed to load products. Please try again later.';
errorMessage.style.display = 'block';});
// Code meant to display error message. 
// Error message set to be displayed when errors are found.

function displayProducts(data) {
const productContainer = document.getElementById('product-container'); // Get the container
// Function set to display the products
data.forEach(product => {
const productDiv = document.createElement('div'); 
productDiv.innerHTML = `
<h2>${product.name}</h2>
<p>Company: ${product.company}</p>
<p>Price: $${product.price}</p>
<img src="${product.image}" alt="${product.name}" />`;
// Code created to loop through all the products and display product details. 
productContainer.appendChild(productDiv);});}
// Code created to display the products on the webpage. 

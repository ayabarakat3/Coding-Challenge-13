fetch('https://www.course-api.com/javascript-store-products')
.then(response => response.json()) 
// Code set to fetch the product data from API.
// Response was then converted to json.
.then(data => {
console.log(data);})
// Code meant to log data.
.catch(error => {
console.error('Error: Products failed to load.', error); });
// Error message created if fetch fails. 
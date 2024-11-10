// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// Exercise 1: ForEach Basics
console.log("Names and Provinces:");
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Exercise 2: Uppercase Transformation
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log("Uppercase Provinces:", upperCaseProvinces);

// Exercise 3: Name Lengths
const nameLengths = names.map(name => name.length);
console.log("Name Lengths:", nameLengths);

// Exercise 4: Sorting
const sortedProvinces = [...provinces].sort(); // Using spread operator to avoid mutating original array
console.log("Sorted Provinces:", sortedProvinces);

// Exercise 5: Filtering Cape
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log("Remaining Provinces Count:", filteredProvinces.length);

// Exercise 6: Finding 'S'
const containsS = names.map(name => name.includes('S')).some(Boolean);
console.log("Contains letter 'S':", containsS);

// Exercise 7: Creating Object Mapping
const provinceMapping = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
}, {});
console.log("Names to Provinces Mapping:", provinceMapping);

// Advanced Exercises (Single console.log Execution)

// Log Products
console.log("Products:");
products.forEach(product => console.log(product.product));

// Filter by Name Length (Products)
const shortNameProducts = products.filter(product => product.product.length <= 5);
console.log("Filtered Products (name length <= 5):", shortNameProducts);

// Price Manipulation
const totalPrice = products
    .filter(product => {
      // Convert to string to be able to use.trim()
      const price = String(product.price).trim();
      return price !== '' && !isNaN(price);
    })
    .map(product => parseFloat(product.price)) // Convert string prices to numbers
    .reduce((total, price) => total + price, 0); // Calculate total price
console.log("Total Price of Products:", totalPrice);

// Concatenate Product Names
const allProductNames = products.reduce((acc, product) => acc + product.product + ', ', '').slice(0, -2); // Remove trailing comma and space
console.log("Concatenated Product Names:", allProductNames);

// Find Extremes in Prices
const prices = products
    .filter(product => {
      const price = String(product.price).trim();
      return price !== '';
    } ) // Filter out products without prices
    .map(product => parseFloat(product.price)); // Convert string prices to numbers

if (prices.length > 0) {
    const highestPrice = Math.max(...prices);
    const lowestPrice = Math.min(...prices);
    console.log(`Highest Price: ${highestPrice}. Lowest Price: ${lowestPrice}.`);
} else {
    console.log("No valid prices available.");
}

// Object Transformation
const transformedProducts = products.reduce((acc, product) => {
    acc[product.product] = { name: product.product, cost: parseFloat(product.price) || null };
    return acc;
}, {});
console.log("Transformed Products Object:", transformedProducts);
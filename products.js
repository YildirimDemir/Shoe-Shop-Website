fetch('products.json')
            .then(response => response.json())
            .then(data => {
                // Function to create a product card
                const createProductCard = (product) => {
                    return `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p class="card-category">${product.gender} ${product.category} Shoe</p>
                        <p class="card-price">Price: $${product.price}</p>
                    </div>
                    `;
                };

                // Function to filter products
                const filterProducts = () => {
                    const genderFilter = document.getElementById('gender').value;
                    const categoryFilter = document.getElementById('category').value;
                    const colorFilter = document.getElementById('color').value;
                    const priceRangeFilter = document.getElementById('price-range').value;

                    const filteredProducts = data.filter(product => {
                        const price = parseInt(product.price);
                        const [minPrice, maxPrice] = priceRangeFilter.split('-').map(Number);

                        return (
                            (genderFilter === '' || product.gender === genderFilter) &&
                            (categoryFilter === '' || product.category === categoryFilter) &&
                            (colorFilter === '' || (Array.isArray(product.color) ? product.color.includes(colorFilter) : product.color === colorFilter)) &&
                            (priceRangeFilter === '' || (minPrice <= price && price <= maxPrice))
                        );
                    });

                    const productCardsContainer = document.querySelector(".products");
                    productCardsContainer.innerHTML = "";

                    filteredProducts.forEach(product => {
                        const productCard = createProductCard(product);
                        productCardsContainer.innerHTML += productCard;
                    });
                };

                // Add event listeners to filter form elements
                document.getElementById('gender').addEventListener('change', filterProducts);
                document.getElementById('category').addEventListener('change', filterProducts);
                document.getElementById('color').addEventListener('change', filterProducts);
                document.getElementById('price-range').addEventListener('change', filterProducts);

                // Initial product display
                filterProducts();
            })
            .catch(error => console.error('Error fetching data:', error));

const filterFixed = document.querySelector("#filter-form");
const filterFixedCoord = filterFixed.getClientRects();
console.log(filterFixedCoord);

window.addEventListener("scroll", function(){
    if(window.scrollY > filterFixedCoord[0].top){
        filterFixed.classList.add("filter-form-fixed")
    }else{
        filterFixed.classList.remove("filter-form-fixed")
    }
})
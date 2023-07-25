fetch("/products.json")
    .then(res => res.json())
    .then(data => {
        let detail = new URLSearchParams(window.location.search);
        let comingId = detail.get("id");
        console.log(comingId)
        let detailProduct = data.filter(product => product.id == comingId);
        let goDetail = detailProduct.map(product => {
            // Create the size options
            let sizeOptions = product.size.map(size => `<option value="${size}">${size}</option>`).join("");

            return`
            <div class="product-detail-container">
                <div class="product-detail-box">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-detail-box">
                    <h1>${product.name}</h1>
                    <div class="product-info">
                        <p id="detail-gender">${product.gender}/ </p>
                        <p id="detail-category">${product.category}/</p>
                        <p id="detail-color">${product.color}</p>
                    </div>
                    <select id="detail-size">
                        ${sizeOptions}
                    </select>
                    <p id="detail-price"><span>$</span>${product.price}</p>
                    <p id="detail-about">${product.about}</p>
                    <button id="add-to-basket">Add to Basket</button>
                </div>
            </div>
            `;
        }).join("");
        document.querySelector(".product-detail-content").innerHTML = goDetail;
        console.log(goDetail)
    })
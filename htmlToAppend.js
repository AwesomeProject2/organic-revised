const htmlToAppend = (product) => {
    const products = document.querySelector('.flex2');
    const productTitle = product.name;
    const productPrice = product.price;
    const productUrl = product.url;

    const htmlToAppend = `
    <div>
        <img src="${productUrl}" alt="Tomatoes, Lettuce and Cucumber">
        <h4>${productTitle}</h4>
        <p>Lorem Ipsum Doior Sit Amet, Consectetus Adipisicing Elit.</p>
        <!-- Change font or tag if needed -->
        <p class="price">$<span class="price-num">${productPrice}</span></p>
        <button class="button">Add To Cart</button>
    </div>
    `
    products.innerHTML += htmlToAppend;
}

export default htmlToAppend;
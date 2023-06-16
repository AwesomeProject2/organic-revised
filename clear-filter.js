import { app } from "./firebase.js"
import { getDatabase, ref, get, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const database = getDatabase(app);
const dbRef = ref(database);

export const clearFilter = () => {

    const clearButton = document.querySelector('.clear');

    clearButton.addEventListener('click', () => {
        const products = document.querySelector('.flex2');
        products.innerHTML = '';
        const select = document.querySelector('#filter');
        select.value = 'default';

        onValue(dbRef, (data) => {
            if (data.exists()) {
                const allProducts = data.val();
                    for (let key in allProducts) {
    
                            const productTitle = allProducts[key].name;
                            const productPrice = allProducts[key].price;
                            const productUrl = allProducts[key].url;
    
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
            }
        })
    })
}
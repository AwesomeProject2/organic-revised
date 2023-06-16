import { app } from "./firebase.js";
import { getDatabase, ref, get, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const database = getDatabase(app);
const dbRef = ref(database);

// get(dbRef).then(snapshot => console.log(snapshot.val()))

export const filterProducts = () => {
    // Selecting form element from the DOM
    
    const form = document.querySelector('.filter')
    
    // Adding event listener to listen to change (filtering)
    
    form.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        const products = document.querySelector('.flex2');
        products.innerHTML = '';

        onValue(dbRef, (data) => {
            if (data.exists()) {
                const allProducts = data.val();
                for (let key in allProducts) {
                    const productValue = allProducts[key].value;
                    if (productValue === selectedValue) {

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
            }
        })
    })
}


// Once an option has been selected, only display the products that meet that criteria
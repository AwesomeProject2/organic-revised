import { app } from "./firebase.js";
import { getDatabase, ref, get, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import htmlToAppend from "./htmlToAppend.js";

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
                const databaseProducts = data.val();
                for (let key in databaseProducts) {
                    const allProducts = databaseProducts[key];
                    const productValue = databaseProducts[key].price;
                    if (selectedValue === '<50' && productValue < 50) {
                        htmlToAppend(allProducts);
                    } else if (selectedValue === '>50' && productValue > 50) {
                        htmlToAppend(allProducts);
                    }
                }
            }
        })
    })
}


// Once an option has been selected, only display the products that meet that criteria
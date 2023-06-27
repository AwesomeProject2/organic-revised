import { app } from "./firebase.js"
import { getDatabase, ref, get, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import htmlToAppend from "./htmlToAppend.js";

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
                const databaseProducts = data.val();
                    for (let key in databaseProducts) {
                        const allProducts = databaseProducts[key];
                        htmlToAppend(allProducts);
                    }
            }
        })
    })
}
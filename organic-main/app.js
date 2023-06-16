import { app } from "./firebase.js";
import { getDatabase, ref, get, orderByChild, equalTo } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

//firebase tomfoolery 
const database = getDatabase(app);
const dbRef = ref(database);

get(dbRef).then(snapshot => console.log(snapshot.val()))

//traversing the DOM -- LIKELY NEED TO CHANGE AFTER UPDATED HTML
const userInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');

//event listener on search form -- LIKELY NEED TO UPDATE
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = userInput.value.toLowerCase();
    get(dbRef).then((snapshot) => {
        const itemData = snapshot.val();
        if (itemData) {
            let itemFound = false;
            for (const key in itemData) {
                const item = itemData[key];
                //added searching by price... feels silly?
                if (
                    item.name.toLowerCase().includes(searchTerm) ||
                    item.price.toString().includes(searchTerm)
                ) {
                    //need a nicer looking append
                    const targetElement = document.getElementById('searchForm');
                    const existingPElement = targetElement.querySelector('p');
                    const existingimgElement = targetElement.querySelector('img');
                    if (existingPElement && existingimgElement) {
                        targetElement.removeChild(existingPElement);
                        targetElement.removeChild(existingimgElement);
                    }
                    const pElement = document.createElement('p');
                    pElement.textContent = `We have ${item.name} in stock for $${item.price}`;
                    const imgElement = document.createElement('img');
                    imgElement.src = item.url;
                    targetElement.appendChild(pElement);
                    targetElement.appendChild(imgElement);
                    itemFound = true;
                }
            }
            //if item not found... (make dry later?)
            if (!itemFound) {
                // Remove existing appended elements
                const existingPElement = searchForm.querySelector('p');
                const existingimgElement = searchForm.querySelector('img');
                if (existingPElement && existingimgElement) {
                    searchForm.removeChild(existingPElement);
                    searchForm.removeChild(existingimgElement);
                }
                // Append "Item not found" message
                const pElement = document.createElement('p');
                pElement.textContent = "Item not found";
                searchForm.appendChild(pElement);
            }
        }
    });
});

import { app } from "./firebase.js";
import { getDatabase, ref, get, orderByChild, equalTo } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

//firebase tomfoolery 
const database = getDatabase(app);
const dbRef = ref(database);
get(dbRef).then(snapshot => console.log(snapshot.val()))

//traversing the DOM
const userInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const flex2Container = document.querySelector('.flex2');
const flex3Container = document.querySelector('.flex3');
const flex2Default = flex2Container.innerHTML;
const flex3Default = flex3Container.innerHTML;

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = userInput.value.toLowerCase();
    flex2Container.innerHTML = '';
    flex3Container.innerHTML = '';

    // Rest of the code for searching and displaying results
    get(dbRef).then((snapshot) => {
        const itemData = snapshot.val();
        if (itemData) {
            let itemFound = false;
            for (const key in itemData) {
                const item = itemData[key];
                // Added searching by name and price
                if (
                    //converts text to lowercase and numbers to strings
                    item.name.toLowerCase().includes(searchTerm) ||
                    item.price.toString().includes(searchTerm)
                ) {
                    //storing the default galleryItem style in a variable w template literals
                    const htmlToAppend = `
                    <div class="galleryItem">
                        <img src="${item.url}" alt="${item.name}">
                        <h4>${item.name}</h4>
                        <p>${item.description}</p>
                        <p class="price">$${item.price}</p>
                        <button class="button">Add To Cart</button>
                    </div>
                    `;
                    //showing correct galleryItem in gallery
                    flex2Container.insertAdjacentHTML('beforeend', htmlToAppend);
                    itemFound = true;
                }
            }
            //error handling
            if (!itemFound) {
                const searchInput = document.getElementById('searchInput');
                searchInput.value = '';
                searchInput.placeholder = 'Item not found';
                userInput.style.border = '1px solid red';
            } else {
                //remove red border on subsequent searches without click on Clear
                const searchInput = document.getElementById('searchInput');
                searchInput.style.border = '';
            }
        }
    });
});

//clear search functionality 
const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', () => {
    userInput.value = '';
    flex2Container.innerHTML = flex2Default;
    flex3Container.innerHTML = flex3Default;
    userInput.style.border = '';
});

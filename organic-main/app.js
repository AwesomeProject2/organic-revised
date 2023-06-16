import { app } from "./firebase.js";
import { getDatabase, ref, get, orderByChild, equalTo } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";


const database = getDatabase(app);
const dbRef = ref(database);

get(dbRef).then(snapshot => console.log(snapshot.val()))

const userInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = userInput.value;
    get(dbRef).then((snapshot) => {
        const itemData = snapshot.val();
        if (itemData) {
            Object.values(itemData).forEach((item) => {
                if (item.name === searchTerm) {
                    console.log(item.name);
                    const targetElement = document.getElementById('searchForm')
                    const existingPElement = targetElement.querySelector('p');
                    if (existingPElement) {
                        targetElement.removeChild(existingPElement);
                    }
                    const pElement = document.createElement('p');
                    pElement.textContent = `We have ${item.name} in stock!`;
                    targetElement.appendChild(pElement);
                }
            });
        } else {
            console.log("No item found");
        }
    });
});

function submission(event) {
    event.preventDefault();
    console.log("submit");
}

searchForm.addEventListener("submit", submission);

import { app } from "./firebase.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";


const database = getDatabase(app);
const dbRef = ref(database);

get(dbRef).then(snapshot => console.log(snapshot.val()))
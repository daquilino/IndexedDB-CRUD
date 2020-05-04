/*
 userID, firstName, lastName, state

db - database
tx - transaction - a query 
store - akin to a table in our database
index - allows you to query db using different fields other than keyPath


*/
const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

let db;  

// Opens/Creates a new database;
// Takes a string as a name and an integer as the version number (1 by default)
const request = indexedDB.open("userDB", 1);

// Runs only once, when DB first created or version is changed.
request.onupgradeneeded = ({ target }) => {
  console.log('onupgradedneeded');

  let db = target.result;  // or request.result

  //To store something in IndexedDB, we need an object store.
  // creating an object Store akin to creating a table in our DB.  
  // keyPath akin to 'primary key'. What we query our db on.;
  db.createObjectStore("userStore", { keyPath: 'userID' });
  // can also set to autoIncrement 
  //db.createObjectStore("userStore", { autoIncrement: true });

};

//Opening succeeded, will run everytime (if open successful).
request.onsuccess = ({ target }) => {
  console.log("onsuccess");
  // Assigns our global variables, db, tx, store 
  db = target.result; // or request.result

};

//Opening failed.
request.onerror = function (event) {

  console.log("IndexedDB error!:", event.target.errorCode);
};

// Opens  a transaction to create a new user in the db.
function createUser(user) {

  console.log('creating user....')

  user = {
    userID: 3,
    firstName: "Leo",
    lastName: "Jeffery",
    state: "New York"
  }

  let tx = db.transaction("userStore", "readwrite");
  let store = tx.objectStore("userStore")
  let request = store.add(user)

  // if request failed
  request.onerror = function (e) {
    console.log("Error", e.target.error.name);
  }

  // if request was successful
  request.onsuccess = function (e) {
    console.log("User Added");
  }

  // when transaction in complete 
  tx.oncomplete = function () {
    console.log("tx closed createUser")
  }

}


// Clears Entire userStore data.
function clearUsers(){
  let tx = db.transaction("userStore", "readwrite");
  let store = tx.objectStore("userStore")
  let request = store.clear();

  // if request failed
  request.onerror = function (e) {
    console.log("Error", e.target.error.name);
  }

  // if request was successful
  request.onsuccess = function (e) {
    console.log("User Store Cleared");
  }

}
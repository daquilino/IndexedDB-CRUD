/*
We will be creating a phoneBookDB with a phoneBookStore to store contacts.
Each contact will have the following fields: firstName, lastName, email, phoneNumber


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
const request = indexedDB.open("phoneBookDB", 1);

// Runs only once, when DB first created or version is changed.
request.onupgradeneeded = ({ target }) => {
  console.log('onupgradedneeded');

  let db = target.result;  // or request.result

  // An object Store is akin to creating a table in our DB.  
  
  // keyPath akin to 'primary key'. What we query our db on.;
  let store = db.createObjectStore("phoneBookStore", { keyPath: "uuid"});

  
  // Or we can have the keyPath set to autoIncrement 
  // EXAMPLE: 
  // db.createObjectStore('new_pizza', { autoIncrement: true });


  // created an index so we can query our store by lastName.
  store.createIndex("lname", "lastName");
};

//Opening succeeded, will run everytime (if open successful).
request.onsuccess = ({ target }) => {
  console.log("onsuccess");
  // Assigns our global variables, db, tx, store 
  db = target.result; // or request.result

  //When app is first loaded. When db is opened we query and display contacts
  populateAllContacts()

};

//Opening failed.
request.onerror = function (event) {

  console.log("IndexedDB error!:", event.target.errorCode);
};

// Opens  a transaction to create a new user in the db.
function addContact(contact) {

  console.log('creating contact....')
  
  // using uuid npmp package (index.html) to generate unique uuid for contact
  contact.uuid = uuidv4();

  console.log("contact", contact)

 
  let tx = db.transaction("phoneBookStore", "readwrite");
  let store = tx.objectStore("phoneBookStore")
  let request = store.add(contact) 

  // if request failed
  request.onerror = function (e) {
    console.log("Error", e.target.error.name);
  }

  // if request was successful
  request.onsuccess = function (e) {
    console.log("Contact Added");
    populateAllContacts()
    
  }

  // when transaction in complete 
  tx.oncomplete = function () {
    console.log("transaction complete do something here")
  }

}


// Opens a transaction queries all contacts. 
function getAllContacts(cb) {

  console.log('getting all contact....')

  // When creating a transaction for just READING (get or getAll)
  let tx = db.transaction("phoneBookStore", "readwrite");
  let store = tx.objectStore("phoneBookStore")
  let request = store.getAll()

  // if request failed
  request.onerror = function (e) {
    console.log("Error", e.target.error.name);
  }

  // if request was successful
  request.onsuccess = function (e) {
    console.log("Contact Added");
    cb(request.result)
  }
}

// finds One contact by lastName using Index.
function findContact(lastName){

  let tx = db.transaction("phoneBookStore", "readwrite");
  let store = tx.objectStore("phoneBookStore")
  let index = store.index("lname")

  let request = index.get(lastName);

  request.onsuccess = data => {
    console.log("get 2", request.result)
  }
}


//delete contact by uuid
function deleteContact(uuid){
  let tx = db.transaction("phoneBookStore", "readwrite");
  let store = tx.objectStore("phoneBookStore")

  let request = store.delete(uuid);

  request.onsuccess = ()=> populateAllContacts();

}



// Clears Entire phoneBookStore data.
function clearphoneBookStore(){
  let tx = db.transaction("phoneBookStore", "readwrite");
  let store = tx.objectStore("phoneBookStore")
  let request = store.clear();

  // if request failed
  request.onerror = function (e) {
    console.log("Error", e.target.error.name);
  }

  // if request was successful
  request.onsuccess = function (e) {
    console.log("phoneBookStore Cleared");
  }

}
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


// Opens/Creates a new database;
// Takes a string as a name and an integer as the version number (1 by default)
const request = indexedDB.open("userDB", 1);

// Runs only once, when DB first created or version is changed.
request.onupgradeneeded = ({ target }) => {
  let db = target.result;  // or request.result

  //To store something in IndexedDB, we need an object store.
  // creating an object Store akin to creating a table in our DB.  
  // keyPath akin to 'primary key'. What we query our db on.;
  db.createObjectStore("usersStore", { keyPath: 'userID' });
  // can also set to autoIncrement 
  //db.createObjectStore("usersStore", { autoIncrement: true });

};

//Opening succeeded, database is ready.
request.onsuccess = ({ target }) => {
  db = target.result; // or request.result

};

//Opening failed.
request.onerror = function(event) {
  console.log("IndexedDB error!:" ,  event.target.errorCode);
};
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


const request = indexedDB.open("userDB", 1);


// Runs only once, when DB first created or version is changed.
request.onupgradeneeded = ({ target }) => {
  let db = target.result;  // or request.result

  // creating an object Store akin to creating a table in our DB.  
  // keyPath specified my 'primary key';
  db.createObjectStore("usersStore", { keyPath: 'userID' });
  // can also set to autoIncrement 
  //db.createObjectStore("usersStore", { autoIncrement: true });


};

request.onsuccess = ({ target }) => {
  db = target.result;

  // check if app is online before reading from db
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
  console.log("Woops! " + event.target.errorCode);
};
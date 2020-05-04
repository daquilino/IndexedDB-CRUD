console.log("app.js loaded!")


const addUserForm = document.querySelector("#addUserForm");
const userIdInput = document.querySelector("#userId");
const fnameInput = document.querySelector("#fname");
const lnameInput = document.querySelector("#lname");
const stateInput = document.querySelector("#state");

addUserForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("user form submitted")

    let userID = userIdInput.value.trim()
    let firstName = fnameInput.value.trim()
    let lastName = lnameInput.value.trim()
    let state = stateInput.value.trim()


    let newUser = {
        userID,
        firstName,
        lastName,
        state
    }


    createUser(newUser);
 
})
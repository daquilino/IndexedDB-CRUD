console.log("app.js loaded!")


const addContactForm = document.querySelector("#addContact");

const fnameInput = document.querySelector("#fnameInput");
const lnameInput = document.querySelector("#lnameInput");
const emailInput = document.querySelector("#emailInput");
const telInput = document.querySelector("#telInput");


addContactForm.addEventListener("submit", e => {
    e.preventDefault();
    // console.log("user form submitted")

    // let userID = userIdInput.value.trim()
    // let firstName = fnameInput.value.trim()
    // let lastName = lnameInput.value.trim()
    // let state = stateInput.value.trim()


    // let newUser = {
    //     userID,
    //     firstName,
    //     lastName,
    //     state
    // }


    // createUser(newUser);
 
})


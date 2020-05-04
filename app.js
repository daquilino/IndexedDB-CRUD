console.log("app.js loaded!")


const addUserForm = document.querySelector("#addUserForm");
const userIdInput = document.querySelector("#userId");

addUserForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("user form submitted")

    console.log(e.target.elements[0])
 
})
console.log("app.js loaded!")


const addContactBtn = document.querySelector("#addContactBtn");
const addContactModal = document.querySelector("#addContactModal");
const fnameInput = document.querySelector("#fnameInput");
const lnameInput = document.querySelector("#lnameInput");
const emailInput = document.querySelector("#emailInput");
const telInput = document.querySelector("#telInput");
const getAllBtn = document.querySelector("#getAllBtn")


function clearAddContactModalForm(){
    fnameInput.value = ""
    lnameInput.value = ""
    emailInput.value = ""
    telInput.value = ""
}


addContactBtn.addEventListener("click", e => {
    e.preventDefault();
     console.log("Contact Added")

    
    let firstName = fnameInput.value.trim()
    let lastName = lnameInput.value.trim()
    let email = emailInput.value.trim()
    let phoneNumber = telInput.value.trim()


    let newContact = {
        firstName,
        lastName,
        email,
        phoneNumber
    }

    console.log("new contact", newContact)

    addContact(newContact);
    clearAddContactModalForm()

})




getAllBtn.addEventListener("click", populateAllContacts);

// Icon click listener delegation
document.addEventListener("click", event =>{


    if(event.target.classList.contains("deleteIcon")){
        console.log("delete")
    }

    if(event.target.classList.contains("updateIcon")){
        console.log("update")

    }

})


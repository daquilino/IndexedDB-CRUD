console.log("app.js loaded!")


const addContactBtn = document.querySelector("#addContactBtn");

const fnameInput = document.querySelector("#fnameInput");
const lnameInput = document.querySelector("#lnameInput");
const emailInput = document.querySelector("#emailInput");
const telInput = document.querySelector("#telInput");
const tbody = document.querySelector("tbody");


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

    // createUser(newUser);
 
})


// clears out the tbody of out  table
function clearTable (){

}


// gets all contacts from IndexedDB and populates table.
function populateAllContacts (){

/*
 <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr>

*/
}
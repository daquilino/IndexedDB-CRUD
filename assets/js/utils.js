// Here are our functions used in app.js and db.js
// I moved them here so db.js can have access to them, like diaplayContacts 

const tbody = document.querySelector("tbody");

// clears out the tbody of out  table
function clearTable (){
    while(tbody.firstChild){
        tbody.firstChild.remove()
    }
}

// renders given contacts in table
function displayContacts(contacts){

    clearTable();

    if(contacts.length){
        for(let i = 0; i < contacts.length; i++){

            let contact = contacts[i];
            console.log("contact", contact)
            let newRow = `
            <tr>
                <td>${contact.firstName}</td>
                <td>${contact.lastName}</td>
                <td>${contact.email}</td>
                <td>${contact.phoneNumber}</td>
                <td>
                    <svg  data-uuid=${contact.uuid} class="bi bi-pencil-square updateIcon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"/>
                    </svg>
                </td>
                <td >
                    <svg data-uuid=${contact.uuid} class="bi bi-trash deleteIcon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
                    </svg>
                </td>
            </tr>`

            tbody.insertAdjacentHTML('beforeend', newRow)   

        }
    } 

}

// gets all contacts from IndexedDB and populates table.
function populateAllContacts (){
   
    getAllContacts(contacts =>{
        console.log("contacts", contacts);
        displayContacts(contacts)
       
    });
}
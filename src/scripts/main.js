const FormManager = require("./JournalForm.js")
const APIObject = require("./dataManager")
const renderEntryList = require("./EntryList")
//const deleteStuff = require("./Delete")
//console.log(Entries)

let setItem = document.getElementById("form")
setItem.innerHTML = FormManager.renderEntryForm();

//const addListener = () => {
    document.getElementById("SaveEntryButton")
    .addEventListener("click", () => {
        //get form field values


        //create object from them
        const newEntry = {
            title: document.getElementById("entryTitle").value,
            content: document.getElementById("entryContent").value,
            date: Date(Date.now())
        }
        //add timestamp
        //POST to api
        APIObject.saveJournalEntry(newEntry).then(() => {
            FormManager.clearForm()})
            .then(() => {
            renderEntryList()
        })

        //clear the form

        //put HTML rep onto DOM- including delete button
        //renderEntryList(newEntry)
            //renderEntryList(entryID)

})
renderEntryList()
//deleteStuff()
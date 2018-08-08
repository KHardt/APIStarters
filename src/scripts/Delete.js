//new Entry representation to page

function deleteStuff () {
document.getElementById("deleteButton")
    .addEventListener("click", () => {

        APIObject.deleteEntry(newEntry).then(() => {
            renderEntryList()
        })
    })

}

module.exports = deleteStuff
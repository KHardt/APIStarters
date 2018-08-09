//new Entry representation to page
const dataManager = require("./dataManager")

function deleteStuff (id) {
// document.getElementById("deleteButton")
//     .addEventListener("click", () => {

        dataManager.deleteEntry().then(() => {
            renderEntryList(id)
        })
    // })

}

module.exports = deleteStuff
//list of entries.Will need dataManager and new Entry from Entry.js and send to Main
const dataManager = require("./dataManager")
const deleteStuff = require("./Delete")

function renderEntryList () {
    dataManager.getEntries()
        .then((response) => {
            const container = document.getElementById("container")
            container.textContent = ""

            // Filter all products to the ones that have the correct type
            //const entryList = dataManager.getEntries();
            // Display only the products that are of the correct type
            response.forEach(entries => {
                container.innerHTML += `<h5>${entries.date}</h5> 
                <h3>${entries.title}</h3>
                <p>${entries.content}</p>

                <button id="deleteButton" onclick=${deleteStuff()}>Delete Entry</button>`
            })
        })
}
module.exports = renderEntryList
//ALL PROMISES SHOULD BE FOLLOWED BY A .THEN- function could be a promise
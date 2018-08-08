// = require("../data/DataManager")
const FormManager = Object.create(null, {

    clearForm: {
        value: () => {
    document.getElementById("entryTitle").value = "";
    document.getElementById("entryContent").value = ""
        }
},

renderEntryForm: {
    value: () => {
    return `
        <fieldset>
            <label for="entryTitle">Entry Title:</label>
            <input required type="text" id="entryTitle">
        </fieldset>
        <fieldset>
            <label for="entryContent">Content:</label>
            <textarea id="entryContent"></textarea>
        </fieldset>
    
        <button id="SaveEntryButton">Save Entry</button>
    `
}
}

})
module.exports = FormManager

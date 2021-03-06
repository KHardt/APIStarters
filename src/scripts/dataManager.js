const APIObject = {};
//you have to target a specific id etc for PUT DELETE etc API Calls
//NOT get

APIObject.getEntries = () => {
    return fetch("http://localhost:8088/entries?_order=desc&_sort=id")
    .then(response => response.json())  //put .then after promise
    //console.log(result)
    //has to be a function after a .then?
    //.then always returns a propmise
    //if something got returned from the previous it's the argument for next one

}

APIObject.deleteEntry = (id) => {
    return fetch(`http://localhost:8088/entries/${id}jn`, {
        method: "DELETE"
        //.then(response => response.json()) //function returning parsed into json. Don't need to put promise in it
    })

}


APIObject.saveJournalEntry = (entry) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json())
}

APIObject.deleteEntry = () => {
    return fetch("http://localhost:8088/entries", {
        method: "PUT"
        .then(response => response.json()) //function returning parsed into json
    })

}

module.exports = APIObject






/*
const APIObject = {

}


    Purpose: Make GET request to API to retrieve data

APIObject.getTypes = () => {
    return fetch("http://localhost:8088/types")
        .then(response => response.json());
}


    Purpose: Retrieves all product objects from API

APIObject.getProducts = () => {
    return fetch("http://localhost:8088/inventory")
    .then(response => response.json());
}

/*
    Purpose: POSTs (creates) a new product in the API

APIObject.saveProduct = (product) => {
    return fetch("http://localhost:8088/inventory", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });
}

module.exports = APIObject
*/
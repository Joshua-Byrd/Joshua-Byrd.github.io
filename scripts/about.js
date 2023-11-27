const jokeButton = document.querySelector("#joke-button");
const jokeDisplayDiv = document.querySelector("#joke-display");


//create headers and options to get json back from the API
const headers = new Headers({
    "Accept": "application/json",
    "User-Agent": "joshua-byrd@github.io"
});

const options = {
    method: "GET",
    headers:headers
}

jokeButton.addEventListener("click", () => {
    fetch("https://icanhazdadjoke.com/", options)
    .then((response) => response.json())
    .then((data) => {
        jokeDisplayDiv.innerHTML = data["joke"];
    })  
    .catch((err) => {
        jokeDisplayDiv.innerHTML = `Could not load joke: ${err}.`
    }) 
});

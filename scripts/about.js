window.addEventListener("load", () => {
    const jokeSection = document.querySelector("#joke-section");
    jokeSection.style.display = "flex";
})

const jokeButton = document.querySelector("#joke-button");
const jokeDisplayDiv = document.querySelector("#joke-display");


//create headers and options to get json back from the API
const headers = new Headers({
    "Accept": "application/json",
    "User-Agent": "joshua-byrd@github.io"
});

//options object to send with fetch request
const options = {
    method: "GET",
    headers:headers
}

//fetch the joke, parse to json and add to the joke-display div
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

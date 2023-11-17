/* Contact page---------------------------------------------------------------*/

window.onload = function()
{
    const message = document.querySelector("#message");
    message.addEventListener("focus", eraseText);
    message.addEventListener("blur", printWarning);

    const submitButton = document.querySelector("input[name='submit']");
    submitButton.addEventListener("click", validateMessage);
}

/*
Removes the message text when a user clicks in the textarea.
*/
function eraseText() {
    message.innerHTML = ""; 
}

/*
Prints warning if user moves away from message and it is still blank
*/
function printWarning() {
    if (message.innerHTML === "") {
        document.querySelector("#warning-box").innerHTML = "Message cannot be blank!";
    }
}

/*
Prevents user from sending a blank messsage and prints warning
*/
function validateMessage() {
    if (message.innerHTML === "") {
        printWarning();
    }

}


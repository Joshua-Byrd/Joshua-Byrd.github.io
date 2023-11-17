/* Contact page---------------------------------------------------------------*/

window.onload = function()
{
   
    let message = document.querySelector("#message");
    message.addEventListener("focus", eraseText);
    message.addEventListener("blur", printWarning);

}

function eraseText() {
    message.innerHTML = ""; 
}

function printWarning() {
    if (message.innerHTML === "") {
        document.querySelector("#warning-box").innerHTML = "Message cannot be blank!";
    }
}
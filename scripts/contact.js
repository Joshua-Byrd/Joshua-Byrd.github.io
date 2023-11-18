/*
Erase default text when user clicks in textarea
*/
const message = document.querySelector("#message");
message.addEventListener("focus", () => {
    message.innerHTML = '';
});


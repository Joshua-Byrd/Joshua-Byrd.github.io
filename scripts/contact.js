/*
Erase default text when user clicks in textarea. This only happens once, so a user can click away and come back to the message. If the user clicks away and the textarea is blank, a warning message appears. The message will disappear if the user clicks back into the textarea.
*/
const message = document.querySelector("#message");
const warningBox = document.querySelector("#warning-box");
const submitButton = document.querySelector("input[type='submit']");

message.addEventListener("focus", () => {
    message.value = "";
}, {once:true});

message.addEventListener("focus", () => {
    warningBox.innerHTML = "";
});

message.addEventListener("blur", () => {
    if (message.value === "") {
        warningBox.innerHTML = "Message must not be blank.";
    }
});

submitButton.addEventListener("submit", (e)=> {
    if (message.value === "") {
        e.preventDefault;
        warningBox.innerHTML = "Message must not be blank.";
    }
})

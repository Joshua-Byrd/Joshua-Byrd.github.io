/*
Erase default text when user clicks in textarea. This only happens once, so a user can click away and come back to the message. If the user clicks away and the textarea is blank, a warning message appears. The message will disappear if the user clicks back into the textarea. Also prevent submission if empty.
*/
const message = document.querySelector("#message");
const messageWarningBox = document.querySelector("#message-warning-box");
const submitButton = document.querySelector("input[type='submit']");

message.addEventListener("focus", () => {
    message.value = "";
}, {once:true});

message.addEventListener("focus", () => {
    messageWarningBox.innerHTML = "";
});

message.addEventListener("blur", () => {
    if (message.value === "") {
        displayMessageWarning();
    }
});

submitButton.addEventListener("submit", (e)=> {
    if (message.value === "") {
        e.preventDefault;
        displayMessageWarning();
    }
})

function displayMessageWarning() {
    messageWarningBox.innerHTML = "Message must not be blank";
}


/*
Check to make sure email contains the @ symbol and displays a warning if not.
If the user clicks back into the email box, the warning disappears. Prevent submission if not the correct format.
*/
const email = document.querySelector("#email");
const emailWarningBox = document.querySelector("#email-warning-box");

email.addEventListener("blur", () => {
    if (!email.value.includes("@")) {
        displayEmailWarning();
    }  
})

email.addEventListener("focus", ()=> {
    emailWarningBox.innerHTML = "";
})

function displayEmailWarning() {
    emailWarningBox.innerHTML = "Email address must contain '@'";
}

submitButton.addEventListener("submit", (e)=> {
    if (!email.value.includes("@")) {
        e.preventDefault;
        displayEmailWarning();
    }  
})
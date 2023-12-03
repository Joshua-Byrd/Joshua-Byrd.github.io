
const message = document.querySelector("#message");
const messageWarningBox = document.querySelector("#message-warning-box");
const nameText = document.querySelector("#name");
const nameWarningBox = document.querySelector("#name-warning-box");
const email = document.querySelector("#email");
const emailWarningBox = document.querySelector("#email-warning-box");

/*Validator functions---------------------------------------------------------*/

/**
 * Test if name has at least two characters and only contains letters
 */
function validName(name) {
    regex = /^[a-zA-Z]{2,}$/
    return regex.test(name);
}

/**
 * 
 * Test if email is valid (not comprehensive, just basic email formats) 
 * 
 */
function validEmail(email) {
    regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email);

}

/**
 * 
 * Test if message is not empty 
 * 
 */
function validMessage(message) {
    return !(message === "");
}


/* Event listeners for warning messages-------------------------------------- */

message.addEventListener("focus", () => {
    message.value = "";
}, {once:true});


message.addEventListener("focus", () => {
    messageWarningBox.innerHTML = "";
    message.style.border = "none";
});

message.addEventListener("blur", () => {
    if (!validMessage(message.value)) {
        displayMessageWarning();
    } else {
        message.style.border = "2px solid green";
    }
});

email.addEventListener("focus", ()=> {
    emailWarningBox.innerHTML = "";
    email.style.border = "none";
})

email.addEventListener("blur", () => {
    if (!validEmail(email.value)) {
        displayEmailWarning();
    } else {
        email.style.border = "2px solid green";
    }
})

nameText.addEventListener("focus", ()=> {
    nameWarningBox.innerHTML = "";
    nameText.style.border = "none";
})

nameText.addEventListener("blur", () => {
    if (!validName(nameText.value)) {
        displayNameWarning();
    } else {
        nameText.style.border = "2px solid green";
    }
})

/*Functions to display warnings---------------------------------------------- */

function displayMessageWarning() {
    messageWarningBox.innerHTML = "Message must not be blank";
    message.style.border = "1px solid red";
}

function displayEmailWarning() {
    emailWarningBox.innerHTML = "Must be a valid email address";
    email.style.border = "1px solid red";
}

function displayNameWarning() {
    nameWarningBox.innerHTML = "Name must contain at least two characters and only letters."
    nameText.style.border = "1px solid red";
}


/**
 * Checks that name, email, and message are all valid. Returns false if any fail and displays the appropriate message.
 * 
 */
function validateForm() {
    //if name is invalid display warning and check others
    if (!validName(nameText.value)) {
        displayNameWarning();
        if (!validEmail(email.value)) {
        displayEmailWarning();
            if (!validMessage(message.value)) {
            displayMessageWarning();
            }
        }
        return false;
    //if name is valid, check email and message    
    } else if (!validEmail(email.value)) {
        displayEmailWarning();
            if (!validMessage(message.value)) {
            displayMessageWarning();
        }

        return false;
    //check message if name and email are valid     
    } else {
        if (!validMessage(message.value)) {
            displayMessageWarning();
            return false;
        }
    }

    

    

    return true;
}

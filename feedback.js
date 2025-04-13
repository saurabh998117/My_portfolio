const SERVICEID = "YOUR SERVICE ID"
const TEMPLATEID = "YOUR TEMPLATE ID"

let feedbackName = document.getElementById("feedback-name")
let feedbackEmail = document.getElementById("feedback-email")
let feedbackMessage = document.getElementById("feedback-message");

(function () {
    emailjs.init({
        publicKey: "YOUR PUBLIC KEY",
    });
})();

function sendFeedback(param) {
    console.log(param.name + ": " + param.email)
    console.log(param.message)

    emailjs
        .send(SERVICEID, TEMPLATEID, param)
        .then(res => {

            alert("Thanks for your valuable feedback!")
        })
        .catch(err => {
            feedbackName.value = param.name
            feedbackEmail.value = param.email
            feedbackMessage.value = param.message
            console.log(err)
        })
}

function isAvailable(inputField, fieldName) {
    if (inputField.trim()) {
        return true
    } else {
        alert(fieldName + " can't be blank! Please provide a " + fieldName + " value to send the feedback.")
        return false
    }
}

document.getElementById("feedback-button").addEventListener("click", function (event) {
    event.preventDefault()

    const param = {
        name: feedbackName.value.trim(),
        email: feedbackEmail.value.trim(),
        message: feedbackMessage.value.trim()
    }

    if (
        isAvailable(param.name, "Name") &&
        isAvailable(param.email, "Email") &&
        isAvailable(param.message, "Message")
    ) {
        feedbackName.value = ""
        feedbackEmail.value = ""
        feedbackMessage.value = ""
        sendFeedback(param)
    }
})

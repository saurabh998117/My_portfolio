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
 
  function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    const icon = document.getElementById("menu-icon");
    menu.classList.toggle("hidden");

    icon.classList.toggle("ri-menu-line");
    icon.classList.toggle("ri-close-line");
  }
 
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenuBtn = document.getElementById("closeMenuBtn");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js}", // make sure this matches your project
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}

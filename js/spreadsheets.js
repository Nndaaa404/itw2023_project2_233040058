const scriptURL = "https://script.google.com/macros/s/AKfycbymINTDHiaWWAFdvJ2M43md-1TGZJ8Va4S3eSiTaVUlPb_FNSVoNqgF6iGo3k_nIW24zg/exec";
const form = document.forms["warung-bu-enoy-contact-form"];
const alertBox = document.getElementById("myAlert");
const alertMessage = document.getElementById("alertMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            form.reset();
            displayAlert("Success!.", "success");
            console.log("Success!", response);
        })
        .catch((error) => {
            displayAlert("Error.Please try again.", "error");
            console.error("Error!", error.message);
        });
});

function displayAlert(message, type) {
    alertMessage.textContent = message;
    alertBox.style.display = "block";
    alertBox.className = `alert ${type}`;
}

function closeAlert() {
    alertBox.style.display = "none";
}
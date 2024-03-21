document.addEventListener("DOMContentLoaded", function () {
    var popup = document.querySelector(".popup");
    var closeBtn = document.querySelector("#close");
    var openPopupBtn = document.querySelector("#openPopup");
    var submitBtn = document.querySelector("#submitBtn");
    var emailInput = document.querySelector("#email");
    var passwordInput = document.querySelector("#password");
    var signInButton = document.querySelector("#openPopup");

    // Function to check if both email and password are filled
    function areFieldsFilled() {
        return emailInput.value.trim() !== "" && passwordInput.value.trim() !== "";
    }

    // Function to close the popup
    function closePopup() {
        popup.style.display = "none";
    }

    // Function to update Sign In button text
    function updateSignInButtonText() {
        signInButton.textContent = "Signed In";
    }

    // Event listener for close button
    closeBtn.addEventListener("click", closePopup);

    // Event listener for opening the popup
    openPopupBtn.addEventListener("click", function () {
        popup.style.display = "block";
    });

    // Event listener for submit button
    submitBtn.addEventListener("click", function () {
        if (areFieldsFilled()) {
            // Perform your form submission logic here (e.g., AJAX request)
            // After successful submission, update the button text and close the popup
            updateSignInButtonText();
            closePopup();
        } else {
            alert("Please fill in both email and password.");
        }
    });
})
document.addEventListener("DOMContentLoaded", function () {
    var registrationForm = document.getElementById("registration-form");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission behavior

            // Get the form values
            var firstName = document.getElementById("first").value;
            var lastName = document.getElementById("last").value;
            var gender = document.getElementById("gender").value;
            var email = document.getElementById("email").value;
            var mobile = document.getElementById("mobile").value;
            var username = document.getElementById("user").value;
            var password = document.getElementById("pass").value;
            var confirmPassword = document.getElementById("confirm").value;

            // Create a data object to send to the API
            var userData = {
                first: firstName,
                last: lastName,
                gender: gender,
                email: email,
                mobile: mobile,
                user: username,
                pass: password
            };

            // Check if password and confirm password match
            if (password === confirmPassword) {
                // Send the data to the API using a POST request
                fetch("http://localhost:3000/api/register", {
                    method: "POST",  // Use POST for registration
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                })
                .then((response) => response.json())
                .then((data) => {
                    // Handle the API response here
                    console.log(data);
                    showToast("Registration successful!","success");
                    
                    // Redirect to the login page
                    window.location.href = "../login/login-page.html";
                })
                .catch((error) => {
                    console.error("Error:", error);
                    showToast("Registration failed. Please try again.","error");
                });
            } else {
                showToast("Password and Confirm Password are not the same", "error");
            }

        });
    }
});

function showToast(msg, type) {
    message.textContent = msg;
    message.className = `message ${type}`;
    message.style.display = "block";

    setTimeout(function () {
        message.style.display = "none";
    }, 3000);
}
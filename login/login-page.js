// JavaScript for login-page.html
document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission behavior

            var username = document.getElementById("user").value;
            var password = document.getElementById("pass").value;

            // Make a POST request to your API for login
            fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user: username, pass: password }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        showToast("Login successful!","success");
                        // Redirect to the start page
                        window.location.href = "../start/start_page1.html";
                    } else {
                        showToast("Invalid username or password. Please try again.","error");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    showToast("Login failed. Please try again.","error");
                });
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
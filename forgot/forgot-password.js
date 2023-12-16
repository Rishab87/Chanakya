document.getElementById("confirmText").addEventListener("click", () => {
    const email = new URLSearchParams(window.location.search).get("email");
    const newPassword = document.getElementById("new_pass").value;
    const confirmPassword = document.getElementById("con_pass").value;

    if (newPassword === confirmPassword) {
        updatePassword(email, newPassword);
    } else {
        alert('New Password and Confirm Password are not the same');
    }
});

function updatePassword(email, newPassword) {
    fetch('http://localhost:3000/api/update-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            if (data.success) {
                showToast("Password updated successfully","success");
                window.location.href = "../login/login-page.html"; // Redirect to the login page
            } else {
                showToast("Failed to update password, ${response.json}","error");
                console.log("But it worked!");
            }
        })
        .catch((error) => {
            console.error('Error updating password:', error);
            showToast("Failed to update password! Catch Error!","error");
        });
}

function showToast(msg, type) {
    message.textContent = msg;
    message.className = `message ${type}`;
    message.style.display = "block";

    setTimeout(function () {
        message.style.display = "none";
    }, 3000);
}
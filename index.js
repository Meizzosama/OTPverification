// Function to generate a random OTP
function generateOTP() {
    const digits = '0123456789';
    let otp = '1234';
    for (let i = 0; i < 4; i++) {
        otp += digits[Math.floor(Math.random() * digits.length)];
    }
    return otp;
}

const expectedOTP = generateOTP(); // Generate a random OTP for demonstration purposes

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const enteredOTP = Array.from(formData.values()).join("");

    if (enteredOTP === expectedOTP) {
        // If the entered OTP matches the expected OTP, show success message
        document.getElementById("errorText").textContent = "OTP verified successfully!";
        document.getElementById("errorText").style.color = "green";
    } else {
        // If the entered OTP is incorrect, show error message
        document.getElementById("errorText").textContent = "Incorrect OTP. Please try again.";
        document.getElementById("errorText").style.color = "red";
    }
}

// Attach event listener to the form
document.getElementById("otpForm").addEventListener("submit", handleSubmit);

// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let charSet = "";
    if (options.includeUppercase) charSet += uppercase;
    if (options.includeLowercase) charSet += lowercase;
    if (options.includeNumbers) charSet += numbers;
    if (options.includeSpecialChars) charSet += specialChars;

  // If no character types are selected, throw an error
  if (charSet === "") charSet = uppercase + lowercase + numbers + specialChars;

    // TODO: Generate the password based on the selected criteria
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById("generateBtn").addEventListener("click", () => {
    // Dapatkan nilai input dari pengguna
    const length = parseInt(document.getElementById("length").value);
    const options = {
        includeUppercase: document.getElementById("includeUppercase").checked,
        includeLowercase: document.getElementById("includeLowercase").checked,
        includeNumbers: document.getElementById("includeNumbers").checked,
        includeSpecialChars: document.getElementById("includeSpecialChars").checked,
    };


// BONUS: Implement the copy to clipboard functionality
const password = generatePassword(length, options);
    document.getElementById("passwordOutput").innerText = password;
});
document.getElementById("copyBtn").addEventListener("click", () => {
    // Dapatkan nilai password yang dihasilkan
    const password = document.getElementById("passwordOutput").innerText;

    // Salin password ke clipboard
    navigator.clipboard.writeText(password).then(() => {
        alert("Password telah disalin ke clipboard!");
    });
});
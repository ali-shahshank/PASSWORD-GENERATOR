// variables
const generateElement = document.getElementById("generate");
const outputElement = document.getElementById("output");
const copyElement = document.getElementById("copy");

// generate password
function generatePassword() {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  // Combine all characters
  const allChars = upperChars + lowerChars + numberChars + symbolChars;
  let password = "";

  // Build password based on selected length
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  // Output the password
  outputElement.value = password;

  document.querySelectorAll("#length-options .btn").forEach((btn) => {
    btn.classList.remove("active");
  });
}

function output() {}

//copy generated password
function copyPassword() {
  const password = outputElement.value;
  const confirmationElement = document.getElementById("confirmation");

  if (password) {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        // Show confirmation text
        confirmationElement.style.display = "inline";
        setTimeout(() => {
          confirmationElement.style.display = "none";
        }, 1500); // Hide after 1.5 seconds
      })
      .catch(() => {
        confirmationElement.style.display = "none"; // Hide if error occurs
      });
  }
}

//show password length
function showStrength() {}

//password length
let passwordLength = 8; // Default length

function setLength(length) {
  passwordLength = length;

  // Remove active class from all buttons
  document.querySelectorAll("#length-options .btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Add active class to the selected button
  document
    .querySelector(
      `#length-options .btn:nth-child(${
        length === 8 ? 1 : length === 12 ? 2 : 3
      })`
    )
    .classList.add("active");
}

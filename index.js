// Function to change the background color to a random RGB value when a button is clicked
function changeBackgroundColor() {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

// Function to reset the background color when the reset button is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''; // Resets to default (usually white or transparent)
}

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const displayParagraph = document.getElementById('keyPressDisplay');
  displayParagraph.textContent = `Key pressed: ${event.key}`;
}

// Function to display user input in real-time as they type
// Function to display user input in real-time as they type
function displayUserInput(event) {
  let inputValue = '';

  if (event && event.target) {
    inputValue = event.target.value;
  } else {
    // Fallback for direct function calls in tests
    const inputElement = document.getElementById('textInput');
    if (inputElement) {
      inputValue = inputElement.value;
    }
  }

  const outputTarget = document.getElementById('textInputDisplay');
  if (outputTarget) {
    outputTarget.textContent = `You typed: ${inputValue}`;
  }
}

// Set up all event listeners
function setupEventListeners() {
  // Change background color on button click
  const changeColorButton = document.getElementById('changeColorButton');
  if (changeColorButton) {
    changeColorButton.addEventListener('click', changeBackgroundColor);
  }

  // Reset background color on double-click of reset button
  const resetColorButton = document.getElementById('resetColorButton');
  if (resetColorButton) {
    resetColorButton.addEventListener('dblclick', resetBackgroundColor);
  }

  // Display key pressed anywhere on the page
  document.addEventListener('keydown', displayKeyPress);

  // Display live text input as user types
  const textInput = document.getElementById('textInput');
  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }
}

// Initialize event listeners once the DOM is fully loaded
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

// Export functions for testing purposes (e.g., in Node.js with JSDOM)
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};
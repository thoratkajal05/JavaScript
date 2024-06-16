
// Get the button element
const button = document.getElementById('change-color');

// Add an event listener to the button
button.addEventListener('click', () => {
  // Generate a random color
const randomColor = getRandomColor();

  // Change the color of the page
document.body.style.background = `#${randomColor}`;
});

// Function to generate a random hexadecimal color
function getRandomColor() {
  // Generate a random hexadecimal color
let color = '';
for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16);
}
return color;
}
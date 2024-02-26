// Get the extension element
let extensionElement = document.querySelector('.background');

// Variables to store the offset between mouse pointer and the extension's top-left corner
let offsetX, offsetY;

// Function to handle mouse down event
function onMouseDown(event) {
    // Calculate the offset between mouse pointer and the top-left corner of the extension
    offsetX = event.clientX - extensionElement.getBoundingClientRect().left;
    offsetY = event.clientY - extensionElement.getBoundingClientRect().top;

    // Add event listeners for mouse move and mouse up events
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    // Set the extension's position to relative to enable dragging
    extensionElement.style.position = 'relative';
}

// Function to handle mouse move event
function onMouseMove(event) {
    // Update the position of the extension based on mouse movement
    extensionElement.style.left = (event.clientX - offsetX) + 'px';
    extensionElement.style.top = (event.clientY - offsetY) + 'px';
}

// Function to handle mouse up event
function onMouseUp() {
    // Remove event listeners for mouse move and mouse up events
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    // Reset the extension's position style
    extensionElement.style.position = '';
}

// Add event listener for mouse down event on the extension element
extensionElement.addEventListener('mousedown', onMouseDown);

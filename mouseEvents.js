const clearBTN = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// // Click
// clearBTN.addEventListener('click', runEvent);
// // Doubleclick
// clearBTN.addEventListener('dblclick', runEvent);
// // Mostdown (click and hold)
// clearBTN.addEventListener('mousedown', runEvent);
// // Mostup (click release)
// clearBTN.addEventListener('mouseup', runEvent);
// Mouseeveter
// card.addEventListener('mouseenter', runEvent);
// // Mouseleave
// card.addEventListener('mouseleave', runEvent);
// //Mouseout
// card.addEventListener('mouseout', runEvent);
// // Mousemove
card.addEventListener('mousemove', runEvent);


// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rbg(${e.offsetX}, ${e.offsetY}, 40)`;
}
// Function to display content in the content div
function displayContent(title, description, code) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <pre>${code}</pre>
    `;
}

// Event listeners for each button to display the respective content
document.getElementById('variablesBtn').addEventListener('click', () => {
    displayContent(
        'Variables in JavaScript',
        'Variables are used to store data. You can declare a variable using var, let, or const.',
        `// Example of variables
var name = 'John'; // var is function-scoped
let age = 25;     // let is block-scoped
const pi = 3.14;  // const is block-scoped and cannot be reassigned`
    );
});

document.getElementById('functionsBtn').addEventListener('click', () => {
    displayContent(
        'Functions in JavaScript',
        'Functions are reusable blocks of code that perform a specific task.',
        `// Example of a function
function greet(name) {
    return 'Hello, ' + name + '!';
}

console.log(greet('Alice')); // Outputs: Hello, Alice!`
    );
});

document.getElementById('loopsBtn').addEventListener('click', () => {
    displayContent(
        'Loops in JavaScript',
        'Loops are used to repeat a block of code multiple times.',
        `// Example of a loop
for (let i = 0; i < 5; i++) {
    console.log('Iteration ' + i);
}

// Outputs:
// Iteration 0
// Iteration 1
// Iteration 2
// Iteration 3
// Iteration 4`
    );
});

document.getElementById('arraysBtn').addEventListener('click', () => {
    displayContent(
        'Arrays in JavaScript',
        'Arrays are used to store multiple values in a single variable.',
        `// Example of an array
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // Outputs: Apple
console.log(fruits[1]); // Outputs: Banana
console.log(fruits[2]); // Outputs: Cherry`
    );
});

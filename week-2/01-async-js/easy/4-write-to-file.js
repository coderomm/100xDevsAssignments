// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

// Asynchronous read from the file
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Failed to read file:", err);
        return;
    }
    console.log("File read successfully:");
    console.log(data);
});

// Simulating an expensive operation
function expensiveOperation(iterations = 5000) {
    let result = 0;
    for (let i = 0; i < iterations; i++) {
        result += Math.sqrt(i);
    }
    console.log(`Expensive operation result: ${result}`);
}

// Change the number of iterations to see how it affects the output timing

setTimeout(expensiveOperation,5000);

// Write new content to a file
const newContent = "This is new content being written to output.txt.";
fs.writeFile('output.txt', newContent, (err) => {
    if (err) {
        console.error("Failed to write file:", err);
        return;
    }
    console.log("Data written to file successfully.");
});

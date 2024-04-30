// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');
fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("failed to read the file")
        return;
    }
    console.log("file read successfully")
    console.log(data)
    const newData = data + "\nThis is new line added to the file.";
    fs.writeFile('output.txt', newData, (err) => {
        if (err) {
            console.error("Failed to write file:", err);
            return;
        }
        console.log("Data written to file successfully.");
    })
})
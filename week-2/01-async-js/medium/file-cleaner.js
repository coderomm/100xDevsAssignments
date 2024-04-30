// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');
fs.readFile('a.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("error while reading")
        return;
    }
    console.log("reading file")
    console.log("file data before clean: ", data)
    const cleanedData = cleanFile(data);
    writeFile(cleanedData);
})
function writeFile(newData) {
    fs.writeFile('a.txt', newData, (err) => {
        if (err) {
            console.log("error while writing")
            return;
        }
        console.log("writed")
    })
}

function cleanFile(data) {
    return data.split(/\s+/).join(' ');
}

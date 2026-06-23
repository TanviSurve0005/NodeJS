const fs = require("fs")

fs.writeFileSync('./test.txt', 'Hiii');

fs.writeFile('./test.txt', 'Hi', (err, result) => {
    console.log(result)
});

const result = fs.readFileSync('./test.txt', "utf-8" )
console.log(result)

fs.readFile('./contacts.txt', 'utf-8', (er, result) =>{
    console.log(result)
})

fs.appendFileSync("./contacts.txt", "Kunal: 1234567890\n")

fs.cpSync('./contacts.txt', './copy.txt')

console.log(fs.statSync('./contacts.txt').isFile())
// TEST #1 Please write a JavaScript code to print the following pattern.

// solution

let string = ""
let rows = 4

for (let i = 1; i <= rows; i++){
    for (let s = 1; s <= rows - i; s++){
        string += " "
    }
    for (let r = 1; r <= (i * 2) - 1; r++){
        string += "*"
    }
    string += "\n"
}

console.log(string)
// NodeList
const boxes = document.querySelectorAll(".box");

let arr = [...boxes];
arr.forEach((el) => (el.style.backgroundColor = "red"));

// const names = ['John', 'Marry', 'Mike'];
// let [first, second, third] = names;
// console.log(second);

change(...boxes);

function change(a, b, c) {
  a.style.backgroundColor = "green";
  b.style.backgroundColor = "dodgerblue";
  c.style.backgroundColor = "yellow";
}

let interpretators = ["php", "perl", "javascript", "python", "typescript"];
let compilers = ["java", "c", "c#"];

let languages = [...interpretators, "assembler", ...compilers];
var rever = languages.split("-").reverse().join("");
//let sp = rever.split("-");
console.log(rever);

console.log("Materi Type Data");

console.log("1. Type Data Primitif");

let name = "Syakir";
let age = 21;
let menikah = false;
let jurusan;
let semester = null;

console.log("String : " + name, "Number : "+ age, "Boolean " + menikah,"Undefine :" + jurusan, "Null : " + semester);

console.log("2. Type Data Object");

const studentObject = {
    name: "Syakir",
    age: 21,
    menikah: false,
    jurusan,
    semester: null,
}

console.log("Ini Bentuk Object Student :", studentObject);

console.log("2. Type Data Array");
// contoh array data primitif, array string
const studentNames = ["Wisnu", "Rudini", "Irfan", "Syakir", "Faishal"];
console.log("Array Primitif String : ", studentNames);

const students = [
    {
        name: "Syakir",
        age: 21,
        menikah: false,
        jurusan,
        semester: null,
    },
    {
        name: "Rudini",
        age: 25,
        menikah: false,
        jurusan,
        semester: null,
    }
]

console.log("Array Object : ", students);
console.log("-------------------------------------");
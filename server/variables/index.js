console.log("Materi Variabels")
/**
 * function blockVar() menjelaskan tentang contoh deklarasi variable var.
 */
const blockVar = () => {
    var student = "Syakir";
    console.log(student);
}

blockVar();

/**
 * function blockLet() menjelaskan tentang contoh deklarasi variable let.
 */
const blockLet = () => {
    let student = "Syakir";
    student = "Rudini";
    console.log(student);
}

blockLet();

/**
 * function blockConst() menjelaskan tentang contoh deklarasi variable const.
 */
const blockConst = () => {
    const student = "Syakir";
    // student = "Rudini";
    console.log(student);

    const dosen = {
        name : "Wisnu",
        age : "29"
    }

    dosen.name  = "Pak Irfan",
    dosen.age = 30

    // penambahan attribute masih di ijin kan di variable const.
    dosen.matakuliah = "Alpro";

    // Object const error ketika data attribute formatnya di ubah.
    // dosen = {
    //     matakuliah : "alpro"
    // }

    console.log(dosen);

}

blockConst();

console.log("-------------------------------------");
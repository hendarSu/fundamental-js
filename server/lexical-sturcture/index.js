console.log("Materi Lexical Stucture")
// • Case sensitivity, spaces, and line breaks
// • Comments
// • Literals
// • Identifiers and reserved words
// • Unicode
// • Optional semicolons (;)
// Comment format JSDocs
/**
 * student adalah entitas mahasiswa
 */
var student = "Shanum";

/**
 * Ini Fungsi untuk menampilkan nama
 */
const getName = () => {
    console.log("Nama Student", student)
}

getName();

// contoh jelek dari line breaks ketika salah salah implementasi
if (student === "Syakir") console.log("Seorang Laki-Laki") 
else console.log("Seorang Perempuan")

console.log("-------------------------------------");
//Deklarasi variabel
let nama = "Andi Pratama";          // Tipe data string
let usia = 16;                      // Tipe data number
let nilairata = 85.5;               // Tipe data number(desimal)
let lulus = true;                   // Tipe data boolean
let alamat = null;                  // Tipe data null
let hobi;                           // Tipe data undefined

const NAMA_SEKOLAH = "SMK TJP Tuban";
const PI = 3.14159;

// Mengubah nilai let (bole)
nama = "Budi Santoso";
usia = usia + 1;

// Mengubah nilai const (tidak bole)
// NAMA_SEKOLAH = "SMK Negeri 1 Tuban"; // Akan menimbulkan error karena const tidak bisa 
// Cek tipe data dengan typeof
console.log(typeof nama);          // string
console.log(typeof usia);          // number
console.log(typeof nilairata);     // number
console.log(typeof lulus);         // boolean
console.log(typeof alamat);        // object
console.log(typeof hobi);          // undefined
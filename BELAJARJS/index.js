//tipe data numer
let bilanganbulat = 43
let bilanganpecahan = 3.14

//tipe data string
let teks1 = 'helllo word'
let teks2 = 'contoh string'

//tipe data bolean (true or false)
let benar = true
let salah = false

//null (kosong)
let tidakAdaNilai = null

let nilai1 = ''
let nilai2 = null

//undefind(sangat tidak ada)
let variabelBelumDiisi

//symbol
const simbolUnik = Symbol('deskripsi simbol')
console.log(simbolUnik)

//array
let angka = [1, 2, 3 ,4, 5]

//function
function tambah(a,b){
    return a + b
}
console.log(tambah(3, 4))

//objek
let siswa = {
    nama : 'rio',
    umur : '17',
    jurusan : 'RPL'
}
console.log(siswa)

//operator artimatika
let hasilPertambahan = 5 + 5
let hasilPengurangan = 10 - 5
let hasilPembagian = 50 / 10
let hasilPerkalian = 100 * 50
let hasilSisaBagi = 9 % 4

//operator perbandingan
let hasilPerbadingan = 5==5
let hasilPerbandinganBesar = 8 > 5
let hasilPerbandinganKecil = 3 < 9
let hasilPerbandinganBolean = true && false;

//operator penugasan
let angka1 = 5
angka1 += 3
console.log (angka1)

//operator null ceking
let objek = null
let nilai = objek?.property
console.log (nilai)

//operator kondisional
let umur = 15
let status = (umur >= 18)? "dewasa" : "anak-anak"
console.log (status)

//if else
if (umur >= 18){
    status = 'dewasa'
}else if(umur >= 12 && umur < 18){
    status = 'remaja'
}else{
    status = 'anak-anak'
}
console.log(status)

//switch
let warna = 'merah'
let warnaApa
switch(warna){
    case "kuning":
    warnaApa = 'warna kuning'
    break;
    case 'merah':
    warnaApa = 'warna merah'
    case 'hijau':
    warnaApa = 'hijau'
    default:
    warnaApa = 'tidak teridentifikasi'
    break;            
}
console.log(warnaApa)

//pemanggilan function
function sapa (nama){
    console.log(`${nama} cepet mati`)
}
sapa('rio')

//pure function (ketika mengembalikan nilai tidak akan berubah meski beberapa kali)
function calculateGST(productPrice){
    return productPrice * 0.05
}
console.log(calculateGST(15))

//arrow function (kita g membutuhkan funcuion.keluarnya di notif)
// let sum = (a, b) => {
//     return a + b
// }
// alert(sum(1,9))

//first class function
const greet = function(nama, kelas){
    console.log (`hello ${nama} kelas ${kelas}`)
    }
    const sayHello = greet
    sayHello('rio', 'XII')

//function jugas
function sapa1(nama = 'pengunjung'){
    console.log(`halo ${nama}`)
}
sapa1()//argumen kosong
sapa1('rio')//argumen terisi

// //devault value(ketika undefind akan di atasi dengan cara ini)
// let jumlah2 = 10
// let total = jumlah2 + (hargaSatuan || 0)

// //operator ternary
// let harga2 = hargaSatuan2 !== undefined ?
// hargaSatuan2 : 0
// console.log(harga2)

// //nullish (klo null)
// let harga3 = hargaSatuan3 ?? 0
// console.log(harga3)

//transformasi array
const numbers = [1, 2, 3, 4, 5]
const doubles = numbers.map((numbers) => numbers * 2)
console.log(doubles)

const numbers1 = [1, 2, 3, 4, 5]
const evenNumbers = numbers1.filter((number) => number % 2===0)
console.log(evenNumbers)

const _numberReduce = [1, 2, 3, 4, 5]
const _sumReduce = _numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(_sumReduce)

//foreach
const fruits = ['aple', 'banana', 'cherry']
fruits.forEach((fruit) => console.log(fruit))

//sort
const buah = ['banana', 'aple']
buah.sort()
console.log(buah)

//find(mencari sesuai true or false)
const numbers3 = [1,2,3,4]
const result = numbers3.find((numbers3) => numbers3 > 1)
console.log(result)





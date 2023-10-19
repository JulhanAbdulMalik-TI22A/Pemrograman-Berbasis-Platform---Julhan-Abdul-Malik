function sksMahasiswa(sks1, sks2, sks3) {
  let hasil = sks1 + sks2 + sks3;
  return hasil;
}

let namaMahasiswa = 'Julhan A Malik';
let nim = 20220040126;
let kelas = 'TI22A';

let jumlahSks1 = 10;
let jumlahSks2 = 8;
let jumlahSks3 = 6;
let totalSks = sksMahasiswa(jumlahSks1, jumlahSks2, jumlahSks3);

console.log(`${namaMahasiswa} dengan NIM ${nim} dari Kelas ${kelas}`);
console.log(`Mengambil SKS sebanyak ${totalSks} selama satu semester`);

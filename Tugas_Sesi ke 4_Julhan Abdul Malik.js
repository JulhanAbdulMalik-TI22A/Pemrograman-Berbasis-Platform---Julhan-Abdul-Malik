let pendapatanHarian = 510000; 

let uangJasa;
let persentaseKomisi;

if (pendapatanHarian <= 200000) {
  uangJasa = 10000;
  persentaseKomisi = 0.1; // 10%
} else if (pendapatanHarian > 200000 && pendapatanHarian <= 500000) {
  uangJasa = 20000;
  persentaseKomisi = 0.15; // 15%
} else {
  uangJasa = 30000;
  persentaseKomisi = 0.2; // 20%
}

// Total komisi
let komisi = pendapatanHarian * persentaseKomisi;

// Total penghasilan salesman
let totalPenghasilan = uangJasa + komisi;

console.log("===============================================\n")
console.log(`Pendapatan Harian: Rp. ${pendapatanHarian}`);
console.log(`Uang Jasa: Rp. ${uangJasa}`);
console.log(`Komisi: Rp. ${komisi}`);
console.log(`Total Penghasilan: Rp. ${totalPenghasilan}`);
console.log("\n===============================================")

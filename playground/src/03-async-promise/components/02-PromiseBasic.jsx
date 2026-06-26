import React, { useState } from 'react';

export function PromiseBasic() {
  const [status, setStatus] = useState("Menunggu...");

  // Fungsi yang mengembalikan sebuah Promise
  const returnPromise = () => {
    setStatus("Pending (Sedang diproses)...");
    
    // Membuat Promise baru. Menerima dua fungsi: resolve (berhasil) & reject (gagal)
    return new Promise((resolve, reject) => {
      // Mensimulasikan delay server selama 1.5 detik
      setTimeout(() => {
        // Menghasilkan angka acak dari 0 sampai 100
        const randomNumber = Math.floor(Math.random() * 100);
        
        // Jika angka > 50, maka Promise berhasil (fulfilled)
        if (randomNumber >= 50) {
          resolve(randomNumber);
        } else {
          // Jika angka < 50, maka Promise gagal (rejected)
          reject(new Error(`Angka ${randomNumber} terlalu kecil!`));
        }
      }, 1500);
    });
  };

  const handlePromise = () => {
    returnPromise()
      // .then() dieksekusi jika Promise berhasil (resolve)
      .then((num) => {
        setStatus(`Fulfilled (Berhasil)! Angka: ${num}`);
      })
      // .catch() dieksekusi jika Promise gagal (reject)
      .catch((error) => {
        setStatus(`Rejected (Gagal)! Pesan: ${error.message}`);
      })
      // .finally() selalu dieksekusi apapun hasilnya (baik resolve maupun reject)
      .finally(() => {
        console.log("Proses Promise telah selesai sepenuhnya.");
      });
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h3>2. Dasar-dasar Promise</h3>
      <p>Promise memiliki 3 state: <b>Pending</b>, <b>Fulfilled</b> (berhasil), dan <b>Rejected</b> (gagal).</p>
      <button onClick={handlePromise}>Jalankan Promise Acak</button>
      <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#e3f2fd', fontWeight: 'bold' }}>
        Status: {status}
      </div>
    </div>
  );
}

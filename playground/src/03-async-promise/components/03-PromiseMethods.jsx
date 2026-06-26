import React, { useState } from 'react';

// Fungsi simulasi request data yang membutuhkan waktu tertentu
const fakeRequest = (name, delay, willFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willFail) reject(new Error(`${name} gagal diambil!`));
      else resolve(`${name} berhasil diambil dalam ${delay}ms`);
    }, delay);
  });
};

export function PromiseMethods() {
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => setLogs((prev) => [...prev, msg]);
  const resetLogs = () => setLogs([]);

  // Promise.all: Menunggu SEMUA promise selesai. Gagal satu = gagal semua.
  const handlePromiseAll = () => {
    resetLogs();
    addLog("Menjalankan Promise.all...");
    Promise.all([
      fakeRequest("Data A", 1000),
      fakeRequest("Data B", 1500),
      fakeRequest("Data C", 500)
    ])
    .then(results => addLog(`Sukses Semua: ${results.join(', ')}`))
    .catch(error => addLog(`Gagal: ${error.message}`));
  };

  // Promise.race: Mengambil yang PALING CEPAT (entah itu gagal atau berhasil).
  const handlePromiseRace = () => {
    resetLogs();
    addLog("Menjalankan Promise.race...");
    Promise.race([
      fakeRequest("Data Lambat", 2000),
      fakeRequest("Data Cepat", 500)
    ])
    .then(result => addLog(`Pemenang Race: ${result}`))
    .catch(error => addLog(`Race Gagal: ${error.message}`));
  };

  // Promise.allSettled: Menunggu SEMUA selesai, apapun hasilnya (gagal/berhasil).
  const handlePromiseAllSettled = () => {
    resetLogs();
    addLog("Menjalankan Promise.allSettled...");
    Promise.allSettled([
      fakeRequest("Data Sukses", 1000),
      fakeRequest("Data Gagal", 1500, true)
    ])
    .then(results => {
      results.forEach(res => {
        if (res.status === 'fulfilled') addLog(`Fulfilled: ${res.value}`);
        else addLog(`Rejected: ${res.reason.message}`);
      });
    });
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h3>3. Metode-metode Promise (All, Race, AllSettled)</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <button onClick={handlePromiseAll}>Uji Promise.all</button>
        <button onClick={handlePromiseRace}>Uji Promise.race</button>
        <button onClick={handlePromiseAllSettled}>Uji Promise.allSettled</button>
      </div>

      <div style={{ backgroundColor: '#fcf8e3', padding: '10px', fontFamily: 'monospace' }}>
        {logs.length === 0 ? "Pilih metode untuk melihat hasil..." : logs.map((log, idx) => (
          <div key={idx}>- {log}</div>
        ))}
      </div>
    </div>
  );
}

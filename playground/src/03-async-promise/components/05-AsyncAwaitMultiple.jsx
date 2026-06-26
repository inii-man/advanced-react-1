import React, { useState } from 'react';

// Fungsi simulasi fetch data
const fetchItem = (name, delay) => {
  return new Promise(resolve => setTimeout(() => resolve(`Data ${name} OK`), delay));
};

export function AsyncAwaitMultiple() {
  const [logs, setLogs] = useState([]);
  
  // Menggunakan 'await' berturut-turut (Berjalan SATU PER SATU / Serial)
  // Waktu total = waktu Item 1 + waktu Item 2
  const fetchSequential = async () => {
    setLogs(["Mulai Sequential (Satu per satu)..."]);
    
    // Tunggu 1000ms
    const item1 = await fetchItem("Satu", 1000);
    setLogs(prev => [...prev, `Selesai: ${item1}`]);
    
    // Setelah Item 1 selesai, baru mulai tunggu Item 2 selama 1000ms
    const item2 = await fetchItem("Dua", 1000);
    setLogs(prev => [...prev, `Selesai: ${item2}`, "Total waktu: ~2000ms"]);
  };

  // Menggunakan Promise.all dengan 'await' (Berjalan BERSAMAAN / Paralel)
  // Waktu total = waktu paling lama dari semua request
  const fetchParallel = async () => {
    setLogs(["Mulai Paralel (Bersamaan)..."]);
    
    // Keduanya dijalankan berbarengan, lalu ditunggu sampai KEDUANYA selesai
    const [item1, item2] = await Promise.all([
      fetchItem("Satu", 1000),
      fetchItem("Dua", 1000)
    ]);
    
    setLogs(prev => [...prev, `Selesai: ${item1} & ${item2}`, "Total waktu: ~1000ms"]);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h3>5. Async/Await Multiple (Serial vs Paralel)</h3>
      <p>Bagaimana cara mengambil beberapa data sekaligus menggunakan async/await secara optimal?</p>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <button onClick={fetchSequential}>Fetch Berurutan (Serial)</button>
        <button onClick={fetchParallel}>Fetch Bersamaan (Paralel dengan Promise.all)</button>
      </div>

      <div style={{ backgroundColor: '#e8f5e9', padding: '10px', minHeight: '100px', fontFamily: 'monospace' }}>
        {logs.map((log, idx) => (
          <div key={idx}>» {log}</div>
        ))}
      </div>
    </div>
  );
}

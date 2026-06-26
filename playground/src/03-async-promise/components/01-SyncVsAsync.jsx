import React, { useState } from 'react';

export function SyncVsAsync() {
  const [logs, setLogs] = useState([]);

  // Fungsi untuk menambah log ke layar
  const addLog = (message) => {
    setLogs((prev) => [...prev, message]);
  };

  // 1. Contoh Synchronous (Berjalan berurutan, memblokir layar)
  const runSynchronous = () => {
    setLogs([]); // Reset log
    addLog("Mulai Synchronous...");
    
    // Looping panjang yang memblokir (membekukan) browser sementara waktu
    let count = 0;
    for (let i = 0; i < 1000000000; i++) {
      count++;
    }
    
    addLog(`Selesai Synchronous! (Hitungan: ${count})`);
  };

  // 2. Contoh Asynchronous (Berjalan di latar belakang, tidak memblokir)
  const runAsynchronous = () => {
    setLogs([]); // Reset log
    addLog("Mulai Asynchronous...");
    
    // setTimeout adalah fungsi Asynchronous bawaan JavaScript
    // Dia akan menunggu selama 2 detik (2000ms) tanpa menghentikan kode lain
    setTimeout(() => {
      addLog("Ini muncul setelah 2 detik! (Asynchronous selesai)");
    }, 2000);
    
    addLog("Ini muncul duluan meskipun ditulis di akhir, karena setTimeout berjalan di latar belakang!");
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h3>1. Synchronous vs Asynchronous</h3>
      <p>Cobalah kedua tombol di bawah. Perhatikan urutan pesan yang muncul.</p>
      
      <div style={{ marginBottom: '15px' }}>
        <button onClick={runSynchronous} style={{ marginRight: '10px' }}>Run Synchronous</button>
        <button onClick={runAsynchronous}>Run Asynchronous (setTimeout)</button>
      </div>

      <div style={{ backgroundColor: '#1e1e1e', color: '#00ff00', padding: '10px', minHeight: '100px', fontFamily: 'monospace' }}>
        {logs.length === 0 ? "Menunggu eksekusi..." : logs.map((log, idx) => (
          <div key={idx}>{">"} {log}</div>
        ))}
      </div>
    </div>
  );
}

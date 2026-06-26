import React, { useState } from 'react';

const fetchUserData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) resolve({ id: 1, name: "Budi", city: "Jakarta" });
      else reject(new Error(`User dengan ID ${id} tidak ditemukan!`));
    }, 1000);
  });
};

export function AsyncAwait() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fungsi yang menggunakan 'async/await' terlihat seperti kode sinkron (berurutan)
  const getUser = async (id) => {
    setLoading(true);
    setError("");
    setData(null);

    // Menggunakan try...catch untuk menangani sukses dan gagal (error)
    try {
      // 'await' akan menghentikan sementara eksekusi fungsi ini sampai Promise selesai
      const user = await fetchUserData(id);
      setData(user); // Dijalankan jika berhasil (resolve)
    } catch (err) {
      setError(err.message); // Dijalankan jika gagal (reject)
    } finally {
      setLoading(false); // Dijalankan apapun hasilnya
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h3>4. Async / Await</h3>
      <p>Sintaks modern untuk menangani Promise agar lebih mudah dibaca daripada <code>.then()</code> berantai.</p>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <button onClick={() => getUser(1)}>Ambil User Sukses (ID 1)</button>
        <button onClick={() => getUser(99)}>Ambil User Gagal (ID 99)</button>
      </div>

      <div style={{ padding: '10px', backgroundColor: '#eee' }}>
        {loading && <b>Loading data...</b>}
        {error && <b style={{ color: 'red' }}>Error: {error}</b>}
        {data && (
          <div>
            <b>Berhasil!</b>
            <p>Nama: {data.name}</p>
            <p>Kota: {data.city}</p>
          </div>
        )}
      </div>
    </div>
  );
}

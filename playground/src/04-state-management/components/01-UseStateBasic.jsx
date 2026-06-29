import React, { useState } from 'react';

export function UseStateBasic() {
  // useState mengembalikan array: [nilaiStateSaatIni, fungsiUntukMengubahState]
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h3>1. useState Basic</h3>
      <p>Mengelola state lokal yang sederhana. Setiap kali tombol ditekan, state berubah dan komponen di-render ulang.</p>
      
      <div style={{ margin: '10px 0' }}>
        <strong>Nilai Count: {count}</strong>
      </div>
      
      <button onClick={() => setCount(count + 1)}>Tambah (+1)</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>Reset</button>
    </div>
  );
}

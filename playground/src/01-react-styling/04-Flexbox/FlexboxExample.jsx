// Mengimpor React
import React from 'react';
// Mengimpor styling flexbox
import './flexbox.css';

// Membuat komponen FlexboxExample
export function FlexboxExample() {
  return (
    // Membungkus dengan container flexbox utama
    <div className="container">
      {/* Wrapper untuk mengatur ukuran elemen di dalamnya */}
      <div className="wrapper">
        {/* Elemen baris menggunakan flexbox arah baris */}
        <div className="row-flex">
          {/* Item flex yang mengisi ruang kosong (flex: 1) */}
          <input type="text" className="flex-item" placeholder="Enter Name" />
        </div>
      </div>
      
      {/* Wrapper untuk baris input umur dan tombol check */}
      <div className="wrapper">
        <div className="row-flex">
          {/* Item flex yang mengisi ruang kosong (flex: 1) */}
          <input type="text" className="flex-item" placeholder="Enter Age" />
          {/* Item flex yang ukurannya tetap (flex: 0 0 120px) */}
          <button className="flex-fixed">Check</button>
        </div>
      </div>
      
      {/* Wrapper untuk tombol Reset dan Submit */}
      <div className="wrapper">
        <div className="row-flex">
          <button className="flex-item" style={{ borderColor: 'green' }}>Reset</button>
          <button className="flex-item">Submit</button>
        </div>
      </div>
    </div>
  );
}

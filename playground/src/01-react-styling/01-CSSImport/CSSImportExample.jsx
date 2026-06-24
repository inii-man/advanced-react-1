// Mengimpor library React untuk membuat komponen
import React from 'react';
// Mengimpor file CSS langsung, ini disebut CSS Import biasa
import './button.css';

// Membuat komponen fungsional bernama CSSImportExample
export function CSSImportExample() {
  // Mengembalikan elemen JSX yang akan dirender ke layar
  return (
    // Membungkus elemen dengan div yang memiliki kelas "container" dari CSS
    <div className="container">
      {/* Membuat elemen input dengan kelas "input" dari CSS */}
      <input 
        type="text" // Tipe input adalah teks
        name="text" // Nama input adalah teks
        className="input" // Menggunakan styling .input dari button.css
        placeholder="Enter content" // Teks petunjuk saat kosong
      />
      {/* Membuat tombol dengan kelas "button" dari CSS */}
      <button className="button">
        Submit
      </button>
    </div>
  );
}

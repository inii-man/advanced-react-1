// Mengimpor React
import React from 'react';
// Mengimpor style sebagai objek 'styles'. 
// Ini memastikan style ter-scoped secara lokal (tidak bocor ke tempat lain)
import styles from './button.module.css';

// Membuat komponen fungsional bernama CSSModuleExample
export function CSSModuleExample() {
  // Mengembalikan elemen JSX
  return (
    // Membungkus elemen dan menggunakan styles.container
    <div className={styles.container}>
      {/* Membuat elemen input dengan styles.input */}
      <input 
        type="text" // Tipe teks
        name="text" // Nama teks
        className={styles.input} // Mengakses class input dari objek styles
        placeholder="Enter content" // Teks petunjuk
      />
      {/* Membuat tombol dengan styles.button */}
      <button className={styles.button}>
        Submit
      </button>
    </div>
  );
}

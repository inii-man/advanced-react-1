// Mengimpor React
import React from 'react';
// Mengimpor file Sass (.scss)
// Pastikan package 'sass' sudah terinstall (npm install sass)
import './styles.scss';

// Membuat komponen fungsional bernama SassExample
export function SassExample() {
  // Mengembalikan elemen JSX
  return (
    <div>
      {/* Menggunakan kelas reset-button yang didefinisikan di Sass dengan nesting & variables */}
      <button className="reset-button">
        Reset Button (Sass)
      </button>
    </div>
  );
}

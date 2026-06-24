// Mengimpor React dan hook useState untuk manajemen state sederhana
import React, { useState } from 'react';
// Mengimpor styled dari package styled-components
import styled from 'styled-components';

// Membuat komponen Container yang div-nya sudah memiliki style
// Menggunakan tagged template literals (simbol backtick ` `)
const Container = styled.div`
  /* Menjadikan div ini flexbox */
  display: flex;
  /* Arah flex adalah baris */
  flex-direction: row;
  /* Memberi jarak antar elemen */
  gap: 10px;
  /* Padding 20px */
  padding: 20px;
  /* Latar belakang abu-abu muda transparan */
  background: rgba(0, 0, 0, 0.05);
  /* Border dengan ketebalan 1px */
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

// Membuat komponen Button dari elemen button dengan styled-components
const Button = styled.button`
  /* Warna latar belakang dapat berubah bergantung pada props "clicked" (dinamis) */
  /* Jika clicked true, warna "lavender", jika false "orangered" */
  background: ${({ clicked }) => (clicked ? "lavender" : "orangered")};
  
  /* Warna teks juga bergantung pada props "clicked" */
  color: ${({ clicked }) => (clicked ? "orangered" : "white")};
  
  /* Padding 12px atas-bawah, 40px kiri-kanan */
  padding: 12px 40px;
  /* Menghilangkan garis tepi */
  border: none;
  /* Cursor menjadi pointer agar tampak bisa diklik */
  cursor: pointer;
  
  /* Mendukung CSS nesting mirip dengan Sass */
  &:hover {
    opacity: 0.8;
  }
`;

// Membuat komponen utama StyledComponentsExample
export function StyledComponentsExample() {
  // State 'clicked' bernilai awal false
  const [clicked, setClicked] = useState(false);

  return (
    // Menggunakan Container yang sudah di-style
    <Container>
      {/* 
        Menggunakan Button yang sudah di-style.
        onClick akan mengubah state 'clicked' menjadi kebalikannya (!clicked).
        Mengirim props 'clicked' ke komponen Button untuk styling dinamis.
      */}
      <Button onClick={() => setClicked((bool) => !bool)} clicked={clicked}>
        Submit
      </Button>
      {/* Tombol kedua untuk menunjukkan bahwa komponen ini dapat digunakan ulang (reusable) */}
      <Button clicked={false}>
        Static Button
      </Button>
    </Container>
  );
}

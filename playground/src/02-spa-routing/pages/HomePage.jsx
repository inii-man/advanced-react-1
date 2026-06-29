import React from 'react';
// Mengimpor PageLayout yang digunakan sebagai kerangka halaman
import PageLayout from '../components/PageLayout';

export function HomePage() {
  return (
    // Menggunakan PageLayout dan mengirimkan judul "Home Page"
    <PageLayout header="Home Pages">
      <p>Welcome to the homepage. Your visit is appreciated!</p>
      <p>Ini adalah contoh Halaman Utama dari Single Page Application (SPA).</p>
    </PageLayout>
  );
}

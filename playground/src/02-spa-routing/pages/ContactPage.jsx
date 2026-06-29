import React from 'react';
// Mengimpor hook useLocation dari react-router-dom
import { useLocation } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

export function ContactPage() {
  // useLocation memberikan kita akses ke URL saat ini, termasuk 'search' (query string)
  const location = useLocation();

  // URLSearchParams membantu kita mengambil nilai-nilai dari query string
  // Misalnya dari URL: /contact?email=user@example.com&address=Jakarta
  const searchParams = new URLSearchParams(location.search);

  // Mengambil nilai spesifik
  const email = searchParams.get("email");
  const address = searchParams.get("address");

  return (
    <PageLayout header="Contact Page">
      <p>Ini adalah halaman Kontak. Data di bawah ini diambil dinamis dari Query String di URL!</p>

      <div style={{ padding: '20px', backgroundColor: '#e3f2fd', borderRadius: '8px', display: 'inline-block', marginTop: '20px' }}>
        <p><strong>Email dari URL:</strong> {email || 'Tidak ada email di URL'}</p>
        <p><strong>Alamat dari URL:</strong> {address || 'Tidak ada alamat di URL'}</p>
      </div>

      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        Coba ubah URL di atas! Ganti nilai setelah tanda <code>?email=...</code> dan lihat apa yang terjadi.
      </p>
    </PageLayout>
  );
}

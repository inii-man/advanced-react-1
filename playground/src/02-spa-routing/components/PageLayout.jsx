import React from 'react';
import styled from 'styled-components';
// Mengimpor komponen Navigation yang baru dibuat
import { Navigation } from './Navigation';

// Styling dasar untuk seluruh halaman (layout)
const Layout = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  /* Hapus justify/align agar konten ada di atas ke bawah */
  border: 1px solid #ccc;
  margin: 20px;
  background: white;
`;

const Content = styled.main`
  padding: 30px;
  text-align: center;
`;

/* 
  PageLayout berfungsi sebagai pembungkus standar setiap halaman.
  Menerima props 'header' (judul) dan 'children' (isi halaman)
*/
export default function PageLayout({ header, children }) {
  return (
    <Layout>
      {/* Menampilkan menu navigasi di bagian atas */}
      <Navigation />

      <header style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>{header}</h2>
      </header>

      {/* Tempat di mana konten spesifik halaman akan ditampilkan */}
      <Content>{children}</Content>
    </Layout>
  );
}

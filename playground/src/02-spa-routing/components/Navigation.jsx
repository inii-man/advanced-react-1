import React from 'react';
// Mengimpor NavLink dari react-router-dom
// NavLink sama seperti Link, tapi bisa mendeteksi jika URL saat ini cocok (aktif)
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styling untuk Container Navigasi
const Nav = styled.nav`
  padding: 24px;
  background-color: #f5f5f5;
  border-bottom: 2px solid #ddd;
  
  /* Memberikan jarak kiri pada semua link KECUALI link yang pertama */
  & > a:not(:first-of-type) {
    margin-left: 24px;
  }

  /* Memberikan gaya khusus untuk link yang sedang aktif */
  .active {
    font-weight: bold;
    color: red;
  }
`;

export function Navigation() {
  return (
    <Nav>
      {/* 
        Navigasi ke halaman Home (/) 
        exact digunakan agar class 'active' hanya nyala saat URL persis '/' 
      */}
      <NavLink exact to="/">Home</NavLink>
      
      {/* Navigasi ke halaman About (/about) */}
      <NavLink to="/about">About</NavLink>
      
      {/* 
        Navigasi ke halaman Contact dengan contoh Query String 
        Query string adalah data tambahan di URL setelah tanda tanya (?)
      */}
      <NavLink to="/contact?email=user@example.com&address=Jakarta">
        Contact (with Query)
      </NavLink>
      
      {/* Navigasi ke Halaman Rahasia (Protected) */}
      <NavLink to="/private">Secret Page</NavLink>
    </Nav>
  );
}

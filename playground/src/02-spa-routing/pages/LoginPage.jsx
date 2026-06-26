import React from 'react';
import PageLayout from '../components/PageLayout';

// Halaman dummy login untuk contoh Private Route
export function LoginPage() {
  return (
    <PageLayout header="Login Page">
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        Akses Ditolak! Kamu dialihkan ke halaman ini karena kamu belum "Login".
      </p>
      <p>
        Di aplikasi nyata, pengguna akan mengisi email dan password di sini sebelum bisa mengakses <b>Secret Page</b>.
      </p>
    </PageLayout>
  );
}

// Halaman rahasia yang hanya bisa diakses kalau sudah "Login"
export function SecretPage() {
  return (
    <PageLayout header="Secret Page">
      <p style={{ color: 'green', fontWeight: 'bold' }}>
        Selamat datang di halaman rahasia!
      </p>
      <p>Karena ini adalah contoh, secara bawaan fungsi login-nya selalu mengembalikan `false` agar kamu melihat bagaimana PrivateRoute melemparmu ke halaman Login.</p>
    </PageLayout>
  );
}

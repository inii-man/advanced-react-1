import React from 'react';
/* 
  Mengimpor alat utama dari react-router-dom (v5)
  - BrowserRouter: Menyediakan sistem navigasi menggunakan API History HTML5.
  - Switch: Memastikan hanya satu Route yang di-render (yang pertama cocok).
  - Route: Menghubungkan path URL tertentu ke komponen tertentu.
*/
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Mengimpor Halaman-Halaman
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage, SecretPage } from './pages/LoginPage';
import { PrivateRoute } from './utils/PrivateRoute';

// Komponen utama aplikasi untuk Modul 02: SPA dan Routing
export function RouterApp() {
  return (
    // Membungkus seluruh aplikasi dengan BrowserRouter
    <BrowserRouter>
      {/* Switch memeriksa semua <Route> dari atas ke bawah dan merender SATU saja */}
      <Switch>
        
        {/* Route dengan 'exact' artinya URL harus persis "/" */}
        <Route exact path="/">
          <HomePage />
        </Route>
        
        {/* Route biasa */}
        <Route path="/about">
          <AboutPage />
        </Route>
        
        <Route path="/contact">
          <ContactPage />
        </Route>
        
        <Route path="/login">
          <LoginPage />
        </Route>

        {/* PrivateRoute: Jika tidak login, akan diredirect ke /login */}
        <PrivateRoute path="/private" component={SecretPage} />

      </Switch>
    </BrowserRouter>
  );
}

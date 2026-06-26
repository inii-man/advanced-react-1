import React from 'react';
// Mengimpor Route dan Redirect
import { Route, Redirect } from 'react-router-dom';

/* 
  PrivateRoute (Cara Deklaratif)
  Ini adalah sebuah Komponen High-Order (HOC). 
  Dia membungkus <Route> biasa, tapi mengecek kondisi terlebih dahulu.
*/
export function PrivateRoute({ component: Component, ...restProps }) {
  // Fungsi pengecekan login palsu (selalu false untuk mendemonstrasikan pengalihan)
  const getUserInfo = () => false; 

  return (
    // Menggunakan properti 'render' pada Route untuk mengontrol apa yang ditampilkan
    <Route 
      {...restProps} 
      render={(props) => {
        const isLoggedIn = !!getUserInfo();
        
        // Jika belum login, paksa pindah ke halaman /login dengan <Redirect>
        if (!isLoggedIn) {
          return <Redirect to="/login" />;
        }
        
        // Jika sudah login, kembalikan komponen yang diminta
        return <Component {...props} />;
      }}
    />
  );
}

/* 
  Contoh Cara Imperatif menggunakan Hook (hanya untuk pembelajaran, 
  biasanya digunakan di dalam komponen langsung)
  
  import { useHistory } from 'react-router-dom';
  import { useEffect } from 'react';
  
  export function usePrivateRoute(validateFunc) {
    const history = useHistory();
    useEffect(() => {
      if (!validateFunc()) {
        history.push("/login"); // Mendorong paksa pindah URL
      }
    }, []);
  }
*/

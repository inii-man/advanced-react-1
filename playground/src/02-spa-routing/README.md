# React Advanced I: SPA and Routing

Selamat datang di bagian kedua dari modul React! Kali ini kita akan belajar tentang **Single Page Application (SPA)** dan bagaimana mengelola perpindahan halaman menggunakan **React Router**.

---

## 1. Apa itu SPA?
**SPA (Single Page Application)** adalah metode pembuatan website di mana seluruh aplikasi dirender dalam satu permintaan halaman pertama (HTML). Perpindahan "halaman" berikutnya hanya memuat ulang data atau komponen yang diperlukan tanpa melakukan refresh (muat ulang total) di browser.
- **Keuntungan**: Cepat, perpindahan halaman instan, terasa seperti aplikasi mobile, dan mudah dikelola data globalnya.
- **Kekurangan**: Proses muat (loading) pertama kali mungkin sedikit lebih lama karena mendownload seluruh kode JavaScript.

Sebagai perbandingan, metode tradisional disebut **MPA (Multi Page Application)**, di mana setiap perpindahan halaman, browser harus meminta halaman HTML baru dari server (terjadi layar putih sesaat saat *refresh*).

## 2. React Router
Karena SPA hanya memiliki satu halaman asli (`index.html`), kita butuh alat untuk memanipulasi URL agar seolah-olah web kita memiliki banyak halaman (misalnya `/about`, `/contact`). Inilah fungsi `react-router-dom`.

### Komponen Utama:
- `<BrowserRouter>`: Komponen pembungkus terluar yang menghubungkan aplikasi React kita dengan sistem URL (History API) browser.
- `<Switch>`: Memilih **satu** rute pertama yang cocok dengan URL saat ini.
- `<Route path="...">`: Menentukan jika URL cocok dengan `path`, maka komponen di dalamnya akan ditampilkan. Gunakan atribut `exact` agar path dicocokkan secara persis.
- `<Link>` & `<NavLink>`: Pengganti tag `<a>` HTML untuk pindah halaman tanpa *refresh*. `<NavLink>` memiliki fitur ekstra, yaitu akan memberikan kelas CSS `active` secara otomatis jika URL saat ini cocok dengan tautannya.
- `<Redirect>`: Otomatis melempar pengguna ke URL lain (sering digunakan untuk rute privat).

## 3. Query String
Query string adalah parameter ekstra pada URL (contoh: `/contact?email=test@test.com&address=Jakarta`).
Di React Router v5, kita bisa menggunakan:
- `useLocation()`: Mengambil objek URL saat ini.
- `new URLSearchParams(location.search)`: Alat bawaan browser untuk memecah dan membaca isi *query string*.

## 4. Private Route (Halaman Rahasia)
Seringkali ada halaman yang hanya boleh diakses setelah *login* (seperti profil atau dashboard).
Kita bisa membuat fungsi/komponen **PrivateRoute** yang memeriksa kondisi login:
- Jika sudah login: tampilkan halaman.
- Jika belum login: gunakan `<Redirect to="/login" />` untuk memaksa mereka ke halaman login.

---

*Coba jelajahi semua folder dan baca baris per baris kodenya. Semua kode telah diberikan komentar mendetail untuk memudahkan belajarmu!*

# Tutorial Membangun Repository Playground React dari Awal

Dokumen ini akan memandumu tahap demi tahap jika kamu ingin membuat ulang *project playground* ini secara manual dari nol. Ini sangat bagus untuk latihan agar kamu paham bagaimana sebuah project React disusun dan dikonfigurasi.

---

## Tahap 1: Inisialisasi Project dengan Vite

Vite adalah alat *build* modern yang sangat cepat untuk membuat aplikasi React.

1. Buka terminal (Command Prompt / Terminal) dan arahkan ke folder di mana kamu ingin membuat project ini.
2. Jalankan perintah pembuatan project Vite:
   ```bash
   npm create vite@latest playground -- --template react
   ```
   *Penjelasan: Perintah ini akan membuat folder baru bernama `playground` dengan template standar React menggunakan JavaScript.*
3. Masuk ke dalam folder yang baru saja dibuat:
   ```bash
   cd playground
   ```
4. Instal semua *dependencies* (paket bawaan) yang dibutuhkan oleh React:
   ```bash
   npm install
   ```

---

## Tahap 2: Menginstal Library Tambahan

Berdasarkan modul pembelajaran kita (Advanced React I), kita membutuhkan beberapa library tambahan untuk *styling* dan *routing*.

Jalankan perintah ini di terminal (pastikan masih di dalam folder `playground`):
```bash
npm install styled-components sass react-router-dom@5
```
*Penjelasan:*
- `styled-components`: Library untuk menulis CSS di dalam JavaScript (CSS-in-JS).
- `sass`: Preprocessor CSS untuk menggunakan fitur seperti *nesting* dan *variables*.
- `react-router-dom@5`: Library untuk membuat Single Page Application (SPA). Kita menginstal versi 5 agar sesuai dengan sintaks `<Switch>` di materi.

---

## Tahap 3: Merapikan Folder `src`

Secara bawaan, Vite akan memberikan beberapa file sampel (seperti logo dan counter). Kita akan menghapusnya agar rapi.

1. Buka folder `src/`.
2. Hapus file `assets/react.svg` (opsional).
3. Hapus seluruh isi dari `App.css` dan ganti dengan *styling* yang lebih netral.
4. Buatlah folder-folder baru untuk memisahkan setiap modul pembelajaran:
   - `src/01-react-styling/`
   - `src/02-spa-routing/`
   - `src/03-async-promise/`
   - `src/04-state-management/`

---

## Tahap 4: Mengisi Modul 1 (React Styling)

1. Di dalam `src/01-react-styling/`, buatlah beberapa sub-folder:
   - `01-CSSImport`
   - `02-CSSModule`
   - `03-Sass`
   - `04-Flexbox`
   - `05-StyledComponents`
   - `06-CSSPosition`
2. Di dalam setiap folder tersebut, buatlah file `.jsx` (contoh: `CSSImportExample.jsx`) beserta file pendukung CSS-nya (contoh: `button.css`, `button.module.css`, `styles.scss`).
3. Tulis komponen React sederhana yang mengimpor *styling* tersebut. Pastikan komponen-komponen tersebut selalu **di-export**.

---

## Tahap 5: Mengisi Modul 2 (SPA & Routing)

Materi ini fokus pada perpindahan halaman tanpa *refresh*.

1. Di dalam `src/02-spa-routing/`, buat kerangka folder:
   - `components/` (Simpan file `Navigation.jsx` dan `PageLayout.jsx` di sini)
   - `pages/` (Simpan halaman seperti `HomePage.jsx`, `AboutPage.jsx`, `ContactPage.jsx` di sini)
   - `utils/` (Simpan `PrivateRoute.jsx` di sini)
2. Buat file penggabung `RouterApp.jsx` di dalam folder `02-spa-routing/`.
3. Di dalam `RouterApp.jsx`, gunakan komponen `BrowserRouter`, `Switch`, dan `Route` dari `react-router-dom` untuk menghubungkan semua *Pages* yang telah dibuat.

---

## Tahap 6: Mengisi Modul 3 (Async & Promise)

Materi ini berfokus pada pengambilan data yang memakan waktu (*Asynchronous*).

1. Di dalam `src/03-async-promise/components/`, buat file-file `.jsx`:
   - `01-SyncVsAsync.jsx`
   - `02-PromiseBasic.jsx`
   - `03-PromiseMethods.jsx`
   - `04-AsyncAwait.jsx`
2. Di masing-masing file, buat simulasi waktu tunggu menggunakan fungsi `setTimeout()` dalam React Component.
3. Gunakan `useState` untuk menyimpan rentetan *log text* lalu tampilkan ke layar sebagai bukti bahwa *Promise* berhasil atau gagal.
4. Buat file induk `AsyncPromiseApp.jsx` untuk mengumpulkan semua komponen tersebut menjadi satu halaman panjang.

---

## Tahap 7: Mengisi Modul 4 (State Management)

Fokus utama di modul ini adalah membedakan *Prop Drilling* dengan *Context API*.

1. Di dalam `src/04-state-management/components/`, buat komponen dasar `01-UseStateBasic.jsx` dan `02-UseRefBasic.jsx`.
2. Buat folder `03-PropDrillingTodo/` dan kembangkan sebuah *Todo List* sederhana. Ingat, letakkan `useState` di komponen paling atas (`TodoAppPropDrilling`), lalu lemparkan state & fungsi-fungsinya sebagai *props* terus ke bawah sampai ke `TodoList` dan `TodoForm`.
3. Buat folder `04-ContextReducerTodo/`. Kembangkan lagi Todo List yang sama, TAPI kali ini buat file `TodoContext.jsx` yang berisikan `createContext` dan `useReducer`. Komponen lain sekarang tidak perlu lempar-lemparan *props*, mereka cukup memanggil `useTodoContext()`!

---

## Tahap 8: Menyambungkan Semua Modul di `App.jsx`

Ini adalah tahap akhir. Kita akan membuat sistem "Tab" di file utama agar pengguna bisa berpindah modul dengan satu klik.

1. Buka `src/App.jsx`.
2. Impor `useState` dari React: `import { useState } from 'react';`
3. Impor semua komponen "Induk" dari masing-masing modul:
   - `import { FlexboxExample } from './01-react-styling/04-Flexbox/FlexboxExample';`
   - `import { RouterApp } from './02-spa-routing/RouterApp';`
   - *dan seterusnya...*
4. Di dalam komponen `App`, buat sebuah state untuk melacak tab yang sedang aktif:
   ```jsx
   const [activeTab, setActiveTab] = useState('react-styling');
   ```
5. Di dalam *return* (JSX), buat tombol-tombol yang mengubah `activeTab` jika diklik:
   ```jsx
   <button onClick={() => setActiveTab('react-styling')}>Modul 1</button>
   <button onClick={() => setActiveTab('spa-routing')}>Modul 2</button>
   ```
6. Render komponen menggunakan *Conditional Rendering* (Operator `&&`):
   ```jsx
   {activeTab === 'react-styling' && <FlexboxExample />}
   {activeTab === 'spa-routing' && <RouterApp />}
   ```

---

## Tahap 9: Menjalankan Aplikasi

Jika semuanya sudah tersambung:
1. Pastikan kamu berada di folder terminal `playground`.
2. Jalankan server lokal Vite:
   ```bash
   npm run dev
   ```
3. Buka *link* yang muncul (biasanya `http://localhost:5173`) di browser. Selamat, Playground-mu sudah jadi dan berjalan sempurna!

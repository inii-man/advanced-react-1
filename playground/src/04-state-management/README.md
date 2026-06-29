# React Advanced I: State Management

Selamat datang di bagian keempat dari modul React! Modul ini membahas bagaimana mengelola "State" (Data) di dalam aplikasi React yang kompleks.

---

## 1. Masalah dalam Pengelolaan State
Dalam **Single Page Application (SPA)**, data dikelola secara mandiri oleh aplikasi di browser (*client-side*). Jika aplikasi semakin besar, kita akan menghadapi dua masalah utama:
1. **Inefisiensi Pengambilan Data (No Caching)**: Mengambil ulang semua data dari server tiap kali pindah halaman akan membuat aplikasi lambat.
2. **Prop Drilling**: Saat komponen bersarang sangat dalam, kita harus melempar data (melalui `props`) melewati banyak komponen perantara yang sebenarnya tidak butuh data tersebut, hanya agar data itu sampai ke komponen anak paling bawah.

## 2. Flux Pattern
Pola tradisional seperti MVC (Model-View-Controller) bisa jadi sangat membingungkan saat aplikasi membesar karena *update* data bisa memicu *update* berantai ke banyak arah.
Facebook menciptakan **Flux Pattern** untuk React:
- **Aliran Data Searah (Unidirectional)**: `Action` -> `Dispatcher` -> `Store` -> `View`.
- Mencegah perubahan data yang tidak terprediksi karena semuanya mengalir dalam satu arah.

## 3. React Hooks untuk State Management
React menyediakan Hooks bawaan untuk mengelola state dari yang sederhana hingga kompleks (seperti Flux):
1. **`useState`**: Menyimpan nilai tunggal/sederhana. Perubahan state akan memicu *re-render* komponen.
2. **`useRef`**: Menyimpan nilai yang **tidak memicu re-render** saat nilainya berubah (cocok untuk menyimpan ID timer atau mengambil elemen DOM).
3. **`useContext`**: Membagikan data secara global ke semua komponen anak tanpa perlu *Prop Drilling*.
4. **`useReducer`**: Cara yang lebih terstruktur (seperti Flux) untuk mengelola state kompleks. Menggunakan fungsi `reducer` yang menerima *Action* untuk memodifikasi state.

---

### Contoh di Playground ini:
- **1. Basic Hooks**: Contoh sederhana `useState` dan `useRef`.
- **2. Todo App (Prop Drilling)**: Aplikasi Todo yang mengelola state menggunakan `useState` di komponen induk terbawah dan melemparkannya ke anak-anaknya secara manual (*Prop Drilling*).
- **3. Todo App (Context + Reducer)**: Aplikasi Todo yang sama, tapi menggunakan `useContext` dan `useReducer`. Komponen anak bisa langsung mengambil data yang mereka butuhkan tanpa *Prop Drilling*!

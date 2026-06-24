# Advanced React I: React Styling

Selamat datang di modul pembelajaran **React Styling**. Modul ini dirancang khusus untuk pemula yang ingin memahami bagaimana memberikan gaya (styling) pada aplikasi React.

Ada beberapa pendekatan utama yang bisa kita gunakan, yaitu:

## 1. CSS Import Biasa
Cara paling dasar adalah dengan membuat file `.css` terpisah (misalnya `button.css`) dan mengimpornya langsung ke dalam file komponen React (`import './button.css'`).
- **Kelebihan**: Mudah dipahami dan digunakan. Mirip seperti membuat web HTML tradisional.
- **Kekurangan**: Semua kelas CSS bersifat *global* (bocor ke komponen lain). Jika ada kelas `.button` di dua file yang berbeda, salah satunya akan saling menimpa (konflik).

## 2. CSS Module
CSS Module memecahkan masalah dari CSS Import. File CSS harus diberi nama `.module.css` (misalnya `button.module.css`).
- **Keunikan**: Saat di-import, kelas CSS akan diubah namanya menjadi unik (di-hash) sehingga tidak mungkin saling bertabrakan atau menimpa antar komponen lain.
- **Cara pakai**: `import styles from './button.module.css'` lalu digunakan di JSX seperti `<div className={styles.container}>`.

## 3. Sass (Syntactically Awesome Style Sheets)
Sass adalah versi "super" dari CSS. File-nya berakhiran `.scss` atau `.sass`.
- **Fitur andalan**: 
  - **Nesting**: Kita bisa menulis CSS di dalam CSS, misalnya:
    ```scss
    .tombol { 
      &:hover { color: red; } 
    }
    ```
  - **Variabel**: Kita bisa menyimpan warna ke dalam variabel `$warna-merah: red;`.
  - **Mixins**: Bisa menyimpan kumpulan style untuk dipakai ulang dengan `@mixin` dan `@include`.

## 4. CSS Flexbox
Flexbox bukanlah alat (tool), melainkan teknik penataan elemen (layout) dalam CSS modern.
- **Konsep Dasar**: Ada elemen induk yang disebut *flex container* (`display: flex;`) dan elemen di dalamnya disebut *flex item*.
- **Arah (Axis)**: Flexbox bekerja di satu arah utama (baris ke samping atau kolom ke bawah) menggunakan properti `flex-direction`.
- Sangat bagus untuk membuat elemen berada di tengah-tengah layar dengan mudah (`justify-content: center` & `align-items: center`).

## 5. Styled-Components (CSS-in-JS)
Pendekatan ini membolehkan kita menulis CSS *di dalam* file JavaScript menggunakan fitur bawaan JS bernama *Tagged Template Literals* (simbol backtick `` ` ``).
- **Kelebihan**: Gaya bisa langsung menyesuaikan State dari React (dinamis).
- **Cara kerja**: Kita membuat *React Component* khusus yang tugas utamanya adalah memberikan styling, contohnya:
  ```jsx
  const Tombol = styled.button`
    background: ${props => props.clicked ? 'red' : 'blue'};
  `;
  ```

---

*Setiap folder di dalam proyek ini memuat satu contoh dari konsep-konsep di atas, lengkap dengan komentar penjelasan untuk setiap baris kodenya.*

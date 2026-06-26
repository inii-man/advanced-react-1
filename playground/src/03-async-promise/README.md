# React Advanced I: Asynchronous Communication & Promise

Selamat datang di bagian ketiga dari modul React! Modul ini membahas bagaimana JavaScript menangani proses **Asynchronous**, mulai dari Callback, Promise, hingga `async/await`.

---

## 1. Asynchronous JavaScript (Event Loop)
JavaScript adalah bahasa *single-threaded*, artinya ia hanya memiliki satu "jalur" untuk menjalankan tugas. Jika kita meminta data dari server secara berurutan (*Synchronous*), browser akan *membeku* sampai data itu datang.

Oleh karena itu, JavaScript menggunakan **Asynchronous**. 
- Proses yang butuh waktu lama (seperti fetch API, `setTimeout`) akan dilempar ke belakang layar.
- Setelah selesai, hasilnya masuk ke **Task Queue**.
- **Event Loop** akan terus memeriksa apakah *jalur utama* sedang kosong. Jika kosong, fungsi dari *Task Queue* dimasukkan dan dijalankan.
- Ini membuat layar tetap responsif walau sedang mendownload data.

## 2. Promise
Dulu, Asynchronous diurus menggunakan **Callback**. Tapi jika banyak tugas berantai, kodenya jadi sangat dalam dan membingungkan (*Callback Hell*).

**Promise** adalah solusi modern. Sesuai namanya, ini seperti sebuah janji:
1. **Pending**: Sedang menunggu janjinya ditepati.
2. **Fulfilled (Resolved)**: Janjinya ditepati (Berhasil).
3. **Rejected**: Janjinya dibatalkan (Gagal).

Kita memproses hasilnya dengan cara yang elegan:
- `.then()`: Jika berhasil.
- `.catch()`: Jika gagal.
- `.finally()`: Akan selalu dijalankan apapun hasilnya.

## 3. Menangani Banyak Promise (Multiple Promises)
- `Promise.all`: Menunggu semua berhasil. Jika 1 gagal, semuanya dianggap gagal seketika.
- `Promise.allSettled`: Menunggu semua selesai, apapun hasilnya (ada daftar sukses/gagal di akhir).
- `Promise.race`: Balapan! Siapa yang selesai paling cepat (entah sukses atau gagal), dia yang diambil hasilnya.
- `Promise.any`: Balapan khusus yang berhasil saja! Mengabaikan yang gagal asalkan ada 1 yang berhasil.

## 4. Async / Await
Sintaks yang membuat kode Asynchronous terlihat *seolah-olah* seperti kode biasa (Synchronous) dari atas ke bawah.
- Sebuah fungsi harus ditandai dengan `async function` agar bisa menggunakan `await`.
- `await` akan menghentikan eksekusi baris tersebut **hanya untuk fungsi tersebut**, sampai Promise-nya selesai.
- Kita menangkap *error* menggunakan blok `try { ... } catch (error) { ... }`.

### Serial vs Paralel
- **Serial (satu-satu)**: `await request1(); await request2();`
- **Paralel (bersamaan)**: `await Promise.all([request1, request2])` (Ini jauh lebih cepat jika tidak saling bergantung!).

## 5. POSTMAN, OpenAPI, dan CORS (Konseptual)
- **POSTMAN**: Aplikasi untuk mengetes API tanpa harus ngoding Frontend terlebih dahulu. Kita bisa mengatur header, payload, dan menyimpan *collections*.
- **OpenAPI (Swagger)**: Standar untuk mendokumentasikan API. Backend dan Frontend bisa "berkomunikasi" melalui dokumen kontrak ini.
- **CORS (Cross-Origin Resource Sharing)**: Fitur keamanan di browser. Jika Web kamu berada di `localhost:3000` tapi memanggil API di `api.server.com`, browser akan memblokirnya karena *Origin* berbeda. Server API harus dikonfigurasi untuk mengizinkan (CORS headers) Web kamu agar bisa mengambil datanya.

---

*Lihat folder `components` dan coba kode interaktif di halaman Playground untuk melihat semua konsep ini beraksi secara langsung!*

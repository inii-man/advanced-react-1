# Cara Clone Project Git

Dokumen ini berisi panduan lengkap tentang cara melakukan *clone* (menggandakan) sebuah project dari repository Git (seperti GitHub, GitLab, atau Bitbucket) ke komputer lokal Anda.

## Prasyarat

Sebelum memulai, pastikan Anda telah memenuhi beberapa persyaratan berikut:
1. **Git Terinstal**: Komputer Anda harus sudah terinstal Git. Anda bisa mengeceknya dengan menjalankan perintah `git --version` di terminal atau command prompt. Jika belum, silakan unduh dan instal dari [git-scm.com](https://git-scm.com/).
2. **Akses Repository**: Pastikan Anda memiliki akses ke repository yang ingin di-clone (URL repository). Jika repository bersifat *private*, Anda juga memerlukan hak akses (seperti SSH key atau Personal Access Token).

## Langkah-langkah Clone Project

### 1. Dapatkan URL Repository
Pertama, buka halaman repository di platform Git yang digunakan (misal GitHub). 
- Klik tombol hijau bertuliskan **Code** (atau clone).
- Pilih metode clone yang Anda inginkan (biasanya **HTTPS** atau **SSH**). 
- Salin (copy) URL yang muncul.
  - *Contoh URL HTTPS*: `https://github.com/username/nama-project.git`
  - *Contoh URL SSH*: `git@github.com:username/nama-project.git`

### 2. Buka Terminal / Command Prompt
Buka aplikasi terminal di komputer Anda:
- **Windows**: Bisa menggunakan Command Prompt (cmd), PowerShell, atau Git Bash (disarankan).
- **Mac/Linux**: Gunakan aplikasi Terminal bawaan.

### 3. Arahkan ke Folder Tujuan
Gunakan perintah `cd` (Change Directory) untuk berpindah ke folder tempat Anda ingin menyimpan project tersebut. Misalnya, jika ingin menyimpan di folder `Documents/Projects`:

```bash
cd Documents/Projects
```

> **Tips**: Pastikan Anda tidak berada di dalam folder project Git lain saat melakukan clone. Sebaiknya letakkan project sejajar dengan project-project lainnya.

### 4. Jalankan Perintah Git Clone
Setelah berada di folder yang tepat, jalankan perintah `git clone` diikuti dengan URL yang sudah disalin tadi:

```bash
git clone <URL_REPOSITORY>
```

**Contoh:**
```bash
git clone https://github.com/username/nama-project.git
```

Atau jika Anda ingin menyimpan ke folder dengan nama yang berbeda dari nama aslinya, Anda bisa menambahkan nama folder di akhir:
```bash
git clone https://github.com/username/nama-project.git nama-folder-baru
```

Tekan **Enter** dan tunggu proses pengunduhan selesai. Git akan mengunduh semua file, history, dan branch dari repository tersebut.

### 5. Masuk ke Folder Project
Setelah proses clone selesai, masuk ke dalam folder project yang baru saja dibuat dengan perintah `cd`:

```bash
cd nama-project
```

### 6. Install Dependencies (Khusus Project Node.js / React)
Biasanya, project berbasis Node (seperti React, Vue, dll) tidak menyertakan folder `node_modules` ke dalam Git untuk menghemat ruang. Anda harus menginstalnya secara manual berdasarkan *package manager* yang digunakan di project tersebut.

- Jika ada file `package-lock.json`, gunakan **npm**:
  ```bash
  npm install
  ```
- Jika ada file `yarn.lock`, gunakan **yarn**:
  ```bash
  yarn install
  ```
- Jika ada file `pnpm-lock.yaml`, gunakan **pnpm**:
  ```bash
  pnpm install
  ```

### 7. Jalankan Project
Setelah semua dependency berhasil diinstal, Anda bisa menjalankan server lokal untuk melihat project tersebut. Perintahnya sangat bergantung pada apa yang ditulis di dalam file `package.json` (bagian `scripts`). Umumnya perintahnya adalah:

```bash
npm run dev
# atau
npm start
```

## Troubleshooting (Masalah Umum)

- **Authentication Failed**: Terjadi jika Anda mencoba clone repository *private* menggunakan HTTPS tetapi kredensial (username/password/token) salah.
- **Permission Denied (publickey)**: Biasanya muncul jika Anda menggunakan URL SSH namun komputer Anda belum didaftarkan SSH Key-nya ke akun GitHub/GitLab. Sebagai solusi cepat, Anda bisa beralih menggunakan URL HTTPS.
- **Destination path '...' already exists and is not an empty directory**: Folder dengan nama project tersebut sudah ada dan tidak kosong. Anda harus menghapus atau mengganti nama folder lama, atau melakukan clone dengan menentukan nama folder baru (seperti pada langkah ke-4).

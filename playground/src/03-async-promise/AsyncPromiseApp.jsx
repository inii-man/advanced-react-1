import React from 'react';

// Mengimpor semua komponen pembelajaran Async & Promise
import { SyncVsAsync } from './components/01-SyncVsAsync';
import { PromiseBasic } from './components/02-PromiseBasic';
import { PromiseMethods } from './components/03-PromiseMethods';
import { AsyncAwait } from './components/04-AsyncAwait';
import { AsyncAwaitMultiple } from './components/05-AsyncAwaitMultiple';

// Komponen utama untuk Modul 03
export function AsyncPromiseApp() {
  return (
    <div style={{ textAlign: 'left', padding: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>Modul 3: Async Communication & Promise</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Pelajari bagaimana JavaScript menangani proses Asynchronous dengan Event Loop, Promise, dan async/await.
      </p>

      {/* Menampilkan setiap bagian komponen secara berurutan */}
      <SyncVsAsync />
      <PromiseBasic />
      <PromiseMethods />
      <AsyncAwait />
      <AsyncAwaitMultiple />

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e2e3e5', borderRadius: '5px' }}>
        <strong>5. Info Tambahan Konseptual (Lihat README.md)</strong>
        <p>Materi tentang <b>POSTMAN, OpenAPI, dan CORS</b> adalah materi konseptual tentang bagaimana Frontend dan Backend berkomunikasi dengan aman dan terstandar. Penjelasannya ada di dalam file <code>README.md</code> folder ini!</p>
      </div>
    </div>
  );
}

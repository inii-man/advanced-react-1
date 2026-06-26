// Mengimpor hook useState dari React
import { useState } from 'react'
// Mengimpor styling utama aplikasi
import './App.css'

// Mengimpor semua komponen pembelajaran
import { CSSImportExample } from './01-react-styling/01-CSSImport/CSSImportExample'
import { CSSModuleExample } from './01-react-styling/02-CSSModule/CSSModuleExample'
import { SassExample } from './01-react-styling/03-Sass/SassExample'
import { FlexboxExample } from './01-react-styling/04-Flexbox/FlexboxExample'
import { StyledComponentsExample } from './01-react-styling/05-StyledComponents/StyledComponentsExample'
import { CSSPositionExample } from './01-react-styling/06-CSSPosition/CSSPositionExample'
import { RouterApp } from './02-spa-routing/RouterApp'

// Komponen utama aplikasi
function App() {
  // State untuk menyimpan contoh mana yang sedang aktif / dilihat
  const [activeTab, setActiveTab] = useState('css-import')

  // Mengembalikan tampilan aplikasi
  return (
    <div className="App">
      <h1>Playground: React Styling</h1>
      <p>Pilih salah satu metode styling untuk melihat contohnya.</p>
      
      {/* Container untuk tombol-tombol navigasi (tab) */}
      <div className="tabs">
        {/* Tombol untuk membuka tab CSS Import */}
        <button onClick={() => setActiveTab('css-import')}>CSS Import</button>
        {/* Tombol untuk membuka tab CSS Module */}
        <button onClick={() => setActiveTab('css-module')}>CSS Module</button>
        {/* Tombol untuk membuka tab Sass */}
        <button onClick={() => setActiveTab('sass')}>Sass (SCSS)</button>
        {/* Tombol untuk membuka tab Flexbox */}
        <button onClick={() => setActiveTab('flexbox')}>Flexbox</button>
        {/* Tombol untuk membuka tab CSS Position */}
        <button onClick={() => setActiveTab('css-position')}>CSS Position</button>
        {/* Tombol untuk membuka tab Styled Components */}
        <button onClick={() => setActiveTab('styled-components')}>Styled Components</button>
      </div>

      <div className="tabs" style={{ marginTop: '10px' }}>
        {/* Tombol untuk membuka tab Modul 2 */}
        <button 
          onClick={() => setActiveTab('spa-routing')}
          style={{ backgroundColor: activeTab === 'spa-routing' ? '#cce5ff' : '' }}
        >
          Modul 2: SPA & Routing
        </button>
      </div>

      {/* Area konten tempat komponen yang aktif ditampilkan */}
      <div className="tab-content" style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
        {/* Menampilkan komponen CSSImportExample jika activeTab bernilai 'css-import' */}
        {activeTab === 'css-import' && (
          <div>
            <h2>1. CSS Import</h2>
            <CSSImportExample />
          </div>
        )}
        
        {/* Menampilkan komponen CSSModuleExample jika activeTab bernilai 'css-module' */}
        {activeTab === 'css-module' && (
          <div>
            <h2>2. CSS Module</h2>
            <CSSModuleExample />
          </div>
        )}
        
        {/* Menampilkan komponen SassExample jika activeTab bernilai 'sass' */}
        {activeTab === 'sass' && (
          <div>
            <h2>3. Sass (SCSS)</h2>
            <SassExample />
          </div>
        )}
        
        {/* Menampilkan komponen FlexboxExample jika activeTab bernilai 'flexbox' */}
        {activeTab === 'flexbox' && (
          <div>
            <h2>4. Flexbox</h2>
            <FlexboxExample />
          </div>
        )}

        {/* Menampilkan komponen CSSPositionExample jika activeTab bernilai 'css-position' */}
        {activeTab === 'css-position' && (
          <div>
            <h2>5. CSS Position</h2>
            <CSSPositionExample />
          </div>
        )}
        
        {/* Menampilkan komponen StyledComponentsExample jika activeTab bernilai 'styled-components' */}
        {activeTab === 'styled-components' && (
          <div>
            <h2>6. Styled Components</h2>
            <StyledComponentsExample />
          </div>
        )}

        {/* Menampilkan Modul 2: SPA & Routing */}
        {activeTab === 'spa-routing' && (
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ textAlign: 'center' }}>Modul 2: SPA & React Router</h2>
            <div style={{ padding: '15px', backgroundColor: '#fff3cd', color: '#856404', marginBottom: '20px', borderRadius: '5px' }}>
              <strong>Catatan Playground:</strong> Saat kamu mengklik link di menu Navigasi bawah ini, perhatikan URL di browsermu berubah (misal menjadi <code>/about</code> atau <code>/contact</code>), tetapi halaman ini tidak <i>me-refresh</i>. Inilah kekuatan SPA!
              <br/><br/><i>Tapi hati-hati: jika kamu melakukan refresh paksa (F5) pada URL <code>/about</code>, tab playground ini akan kembali ke Modul 1 (Default).</i>
            </div>
            <RouterApp />
          </div>
        )}
      </div>
    </div>
  )
}

// Mengekspor komponen App untuk dirender di file main.jsx
export default App

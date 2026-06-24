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
        {/* Tombol untuk membuka tab Styled Components */}
        <button onClick={() => setActiveTab('styled-components')}>Styled Components</button>
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
        
        {/* Menampilkan komponen StyledComponentsExample jika activeTab bernilai 'styled-components' */}
        {activeTab === 'styled-components' && (
          <div>
            <h2>5. Styled Components</h2>
            <StyledComponentsExample />
          </div>
        )}
      </div>
    </div>
  )
}

// Mengekspor komponen App untuk dirender di file main.jsx
export default App

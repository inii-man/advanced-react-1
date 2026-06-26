import React from 'react';
import './flexbox.css';

export function FlexboxExample() {
  return (
    <div>
      <p style={{ textAlign: 'left', marginBottom: '20px' }}>
        <b>Flexbox</b> adalah salah satu sistem layout terpenting di CSS modern.
        Di bawah ini adalah eksplorasi lengkap berbagai fitur utama Flexbox.
      </p>

      {/* 1. Flex Direction */}
      <div className="flex-demo-section">
        <div className="flex-title">1. Flex Direction (Arah Alur)</div>
        <p><code>flex-direction: row</code> (Kiri ke Kanan)</p>
        <div className="container-direction-row">
          <div className="box">Item 1</div>
          <div className="box">Item 2</div>
          <div className="box">Item 3</div>
        </div>
        
        <p style={{marginTop: '10px'}}><code>flex-direction: column</code> (Atas ke Bawah)</p>
        <div className="container-direction-column">
          <div className="box">Item 1</div>
          <div className="box">Item 2</div>
          <div className="box">Item 3</div>
        </div>
      </div>

      {/* 2. Justify Content */}
      <div className="flex-demo-section">
        <div className="flex-title">2. Justify Content (Distribusi Jarak Horizontal)</div>
        <p><code>justify-content: space-between</code> (Jarak di antara elemen, didorong ke pinggir)</p>
        <div className="container-justify">
          <div className="box">Kiri</div>
          <div className="box">Tengah</div>
          <div className="box">Kanan</div>
        </div>

        <p style={{marginTop: '10px'}}><code>justify-content: center</code> (Semua di tengah)</p>
        <div className="container-center">
          <div className="box">Kiri</div>
          <div className="box">Tengah</div>
          <div className="box">Kanan</div>
        </div>
      </div>

      {/* 3. Align Items */}
      <div className="flex-demo-section">
        <div className="flex-title">3. Align Items (Penempatan Vertikal)</div>
        <p>Menciptakan "Perfect Center" (Tengah Horizontal & Vertikal) dengan <code>justify-content: center</code> & <code>align-items: center</code></p>
        <div className="container-align">
          <div className="box">Tengah Sempurna!</div>
        </div>
      </div>

      {/* 4. Flex Wrap & Item Properties */}
      <div className="flex-demo-section">
        <div className="flex-title">4. Flex Wrap, Flex Grow & Order</div>
        <p><code>flex-wrap: wrap</code> (Otomatis turun baris jika kepenuhan) & <code>flex-grow: 1</code> (Kotak hijau melar)</p>
        <div className="container-wrap">
          <div className="box box-grow">1 (Melar/Grow)</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
          <div className="box">5</div>
          <div className="box">6</div>
          <div className="box">7</div>
          <div className="box box-order">8 (Order: -1) Muncul Pertama!</div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './position.css';

export function CSSPositionExample() {
  return (
    <div>
      <h3>Demo CSS Position</h3>
      <p>Scroll ke bawah pada kotak di bawah ini untuk melihat efek <b>Sticky</b>.</p>
      
      {/* Kontainer utama dengan position: relative */}
      <div className="position-container">
        
        {/* Elemen sticky: menempel saat di-scroll */}
        <div className="box-sticky">
          4. position: sticky (Aku akan menempel di atas saat di-scroll!)
        </div>

        {/* Elemen static: normal */}
        <div className="box-static">
          1. position: static (Default, sesuai urutan tulisan)
        </div>

        {/* Elemen relative: digeser tanpa mengganggu yang lain */}
        <div className="box-relative">
          2. position: relative (Bergeser 20px ke bawah dan kanan)
        </div>

        {/* Elemen absolute: bebas bergerak berpatokan pada kontainer */}
        <div className="box-absolute">
          3. position: absolute (Pojok kanan atas kontainer)
        </div>

        {/* Ruang tambahan agar bisa di-scroll */}
        <div className="scroll-space">
          <p>Area ini sengaja dibuat tinggi agar kita bisa men-scroll kotak ini dan melihat cara kerja <code>position: sticky</code>.</p>
          <p>Coba perhatikan kotak kuning (sticky) saat kamu men-scroll ke bawah!</p>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff', padding: '15px', border: '1px solid #ddd' }}>
        <strong>5. position: fixed</strong> (seperti header web yang selalu di atas). 
        <i>Karena ini playground, efek fixed akan menutupi tab lain, jadi tidak didemokan secara langsung di sini.</i>
      </div>
    </div>
  );
}

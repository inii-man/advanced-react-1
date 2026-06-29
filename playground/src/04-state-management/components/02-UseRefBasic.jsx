import React, { useState, useRef } from 'react';

export function UseRefBasic() {
  const [renderCount, setRenderCount] = useState(0);
  
  // useRef menyimpan nilai yang TIDAK memicu re-render saat diubah
  const timerIdRef = useRef(null);
  const [timerStatus, setTimerStatus] = useState("Berhenti");

  const startTimer = () => {
    if (timerIdRef.current) return; // Mencegah timer ganda
    setTimerStatus("Berjalan...");
    
    // Menyimpan ID Timer ke dalam ref. Tidak memicu render ulang!
    timerIdRef.current = setInterval(() => {
      // Kita panggil setState di sini hanya untuk melihat bahwa timer sedang jalan
      // Tapi update timerIdRef-nya sendiri di awal tidak memicu render
      setRenderCount(prev => prev + 1); 
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null; // Menghapus ref tanpa memicu render ulang
    setTimerStatus("Berhenti");
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h3>2. useRef Basic</h3>
      <p>Digunakan untuk menyimpan nilai (seperti ID timer) yang tidak perlu memicu render ulang UI secara langsung.</p>
      
      <div style={{ margin: '10px 0' }}>
        <p>Status Timer: <b>{timerStatus}</b></p>
        <p>Waktu berjalan (Render count): {renderCount}</p>
      </div>
      
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer} style={{ marginLeft: '10px' }}>Stop Timer</button>
    </div>
  );
}

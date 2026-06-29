import React from 'react';
import { TodoContextProvider } from './TodoContext';
import { TodosPage } from './TodosPage';

// Komponen Induk Tertinggi
export function TodoAppContext() {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0', backgroundColor: '#e8f5e9' }}>
      <h3>4. Todo App (useContext + useReducer)</h3>
      <p>Menggunakan arsitektur Flux-like. <code>TodoApp</code> hanya membungkus dengan <code>TodoContextProvider</code> tanpa melempar props (Tanpa Prop Drilling).</p>
      <hr />
      
      {/* Membungkus aplikasi dengan Provider agar semua komponen di dalamnya bisa mengakses State */}
      <TodoContextProvider>
        <TodosPage />
      </TodoContextProvider>
    </div>
  );
}

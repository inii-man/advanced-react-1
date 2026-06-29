import React from 'react';

// Mengimpor semua komponen pembelajaran State Management
import { UseStateBasic } from './components/01-UseStateBasic';
import { UseRefBasic } from './components/02-UseRefBasic';
import { TodoAppPropDrilling } from './components/03-PropDrillingTodo/TodoAppPropDrilling';
import { TodoAppContext } from './components/04-ContextReducerTodo/TodoAppContext';

// Komponen utama untuk Modul 04
export function StateManagementApp() {
  return (
    <div style={{ textAlign: 'left', padding: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>Modul 4: State Management</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Pelajari perbedaan Prop Drilling vs Flux Pattern (Context + Reducer) menggunakan aplikasi Todo sederhana.
      </p>

      {/* Menampilkan komponen dasar */}
      <UseStateBasic />
      <UseRefBasic />
      
      {/* Menampilkan aplikasi Todo (Prop Drilling) */}
      <TodoAppPropDrilling />
      
      {/* Menampilkan aplikasi Todo (Context API) */}
      <TodoAppContext />

    </div>
  );
}

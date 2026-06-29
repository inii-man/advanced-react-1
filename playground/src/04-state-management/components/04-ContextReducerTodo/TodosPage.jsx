import React from 'react';
import { TodoForm } from './TodoForm';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';

// Komponen Perantara (Intermediary)
// Ia TIDAK menerima props apapun dari atasnya! Sangat bersih.
export function TodosPage() {
  return (
    <div style={{ border: '1px dashed green', padding: '10px' }}>
      <h4>Todos Page (Komponen Perantara)</h4>
      
      {/* Tidak ada lagi lempar-melempar props ke bawah */}
      <TodoForm />
      <br />
      <TodoFilter />
      <br />
      <TodoList />
    </div>
  );
}

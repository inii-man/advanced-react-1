import React, { useState } from 'react';
import { TodosPage } from './TodosPage';

// Komponen Induk Tertinggi
export function TodoAppPropDrilling() {
  // Semua state didefinisikan di sini
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [globalId, setGlobalId] = useState(1);

  // Fungsi-fungsi untuk mengubah state
  const toggleTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    setTodos((todos) => [{ title, id: globalId, completed: false }, ...todos]);
    setGlobalId((id) => id + 1);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0', backgroundColor: '#fff3e0' }}>
      <h3>3. Todo App (Prop Drilling)</h3>
      <p>Semua State dan Fungsi berada di komponen teratas (<code>TodoApp</code>). Kemudian dilempar turun (Prop Drilling) ke <code>TodosPage</code>, lalu turun lagi ke <code>TodoList</code>, <code>TodoForm</code>, dst.</p>
      <hr />
      
      {/* Melempar semua data dan fungsi ke bawah (Prop Drilling) */}
      <TodosPage
        state={{ todos, filter }}
        toggleTodo={toggleTodo}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        changeFilter={setFilter}
      />
    </div>
  );
}

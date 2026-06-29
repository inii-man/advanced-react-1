import React from 'react';
import { TodoForm } from './TodoForm';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';

// Komponen Perantara (Intermediary)
// Ia menerima props HANYA untuk dilempar lagi ke bawahnya (Prop Drilling yang menyebalkan)
export function TodosPage({ state, addTodo, deleteTodo, toggleTodo, changeFilter }) {
  
  // Logika filter diterapkan di sini
  const filteredTodos = state.todos.filter((todo) => {
    const { filter } = state;
    if (filter === "all") return true;
    if (filter === "completed" && todo.completed) return true;
    if (filter === "todo" && !todo.completed) return true;
    return false;
  });

  return (
    <div style={{ border: '1px dashed orange', padding: '10px' }}>
      <h4>Todos Page (Komponen Perantara)</h4>
      
      {/* Melempar fungsi addTodo ke TodoForm */}
      <TodoForm onSubmit={addTodo} />
      
      <br />
      
      {/* Melempar filter state dan changeFilter ke TodoFilter */}
      <TodoFilter filter={state.filter} changeFilter={changeFilter} />
      
      <br />
      
      {/* Melempar data dan fungsi-fungsi item ke TodoList */}
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

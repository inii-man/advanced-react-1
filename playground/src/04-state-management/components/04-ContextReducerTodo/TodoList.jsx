import React from 'react';
import { useTodoContext } from './TodoContext';

export function TodoList() {
  // Mengambil data dan fungsi HANYA yang dibutuhkan langsung dari Context
  const { state, toggleTodo, deleteTodo } = useTodoContext();
  const { todos, filter } = state;

  // Logika filter dipindahkan ke tempat yang benar-benar menggunakannya
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed" && todo.completed) return true;
    if (filter === "todo" && !todo.completed) return true;
    return false;
  });

  if (filteredTodos.length === 0) return <p>Tidak ada tugas.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {filteredTodos.map(({ title, completed, id }) => (
        <li 
          key={id} 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginBottom: '5px',
            backgroundColor: '#eee',
            padding: '5px 10px'
          }}
        >
          <span 
            onClick={() => toggleTodo(id)} 
            style={{ 
              textDecoration: completed ? 'line-through' : 'none', 
              cursor: 'pointer',
              flexGrow: 1
            }}
          >
            {completed ? "✅" : "❌"} {title}
          </span>
          <button onClick={() => deleteTodo(id)}>Hapus</button>
        </li>
      ))}
    </ul>
  );
}

import React from 'react';

// Menerima props yang dilempar dari jauh di atas
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) return <p>Tidak ada tugas.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(({ title, completed, id }) => (
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

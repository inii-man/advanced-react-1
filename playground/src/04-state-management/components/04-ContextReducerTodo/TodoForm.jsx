import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';

export function TodoForm() {
  // Mengambil fungsi addTodo LANGSUNG dari Context Global
  const { addTodo } = useTodoContext();
  const [title, setTitle] = useState(""); 

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (title.trim() === "") return;
        addTodo(title); 
        setTitle("");
      }}
    >
      <input
        type="text"
        placeholder="Tambah tugas (Context)..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        style={{ marginRight: '5px' }}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

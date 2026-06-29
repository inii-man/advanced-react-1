import React, { useState } from 'react';

// Menerima prop onSubmit (yang aslinya adalah fungsi addTodo dari TodoApp)
export function TodoForm({ onSubmit }) {
  const [title, setTitle] = useState(""); // Local state untuk form input

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (title.trim() === "") return;
        onSubmit(title); // Memanggil fungsi dari prop
        setTitle("");
      }}
    >
      <input
        type="text"
        placeholder="Tambah tugas baru..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        style={{ marginRight: '5px' }}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

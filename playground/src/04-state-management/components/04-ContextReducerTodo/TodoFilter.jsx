import React from 'react';
import { useTodoContext } from './TodoContext';

export function TodoFilter() {
  // Hanya mengambil state filter dan fungsi changeFilter
  const { state, changeFilter } = useTodoContext();
  const { filter } = state;

  return (
    <div>
      <label style={{ marginRight: '10px' }}>Filter (Context): </label>
      <select
        value={filter}
        onChange={(e) => changeFilter(e.target.value)}
      >
        <option value="all">Semua</option>
        <option value="todo">Belum Selesai</option>
        <option value="completed">Selesai</option>
      </select>
    </div>
  );
}

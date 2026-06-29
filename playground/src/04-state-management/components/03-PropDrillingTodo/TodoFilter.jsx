import React from 'react';

// Menerima state filter dan fungsi changeFilter
export function TodoFilter({ filter, changeFilter }) {
  return (
    <div>
      <label style={{ marginRight: '10px' }}>Filter: </label>
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

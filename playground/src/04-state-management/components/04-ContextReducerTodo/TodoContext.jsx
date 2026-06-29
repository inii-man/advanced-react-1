import React, { createContext, useContext, useReducer, useCallback } from 'react';

// 1. Inisialisasi State Awal
const initialState = {
  todos: [],
  filter: "all",
  globalId: 1,
};

// 2. Membuat Reducer (Mirip Flux: Action -> Reducer -> Ubah State)
function reducer(state, action) {
  switch (action.type) {
    case "add.todo":
      return {
        ...state,
        todos: [{ title: action.payload.title, id: state.globalId, completed: false }, ...state.todos],
        globalId: state.globalId + 1
      };
    case "delete.todo":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    case "toggle.todo":
      return {
        ...state,
        todos: state.todos.map(t => t.id === action.payload.id ? { ...t, completed: !t.completed } : t)
      };
    case "change.filter":
      return {
        ...state,
        filter: action.payload.filter
      };
    default:
      return state;
  }
}

// 3. Membuat Context
const TodoContext = createContext(null);

// 4. Custom Hook untuk mempermudah penggunaan dispatch
function useTodoState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useCallback digunakan agar fungsi tidak dibuat ulang setiap render
  const toggleTodo = useCallback((id) => dispatch({ type: "toggle.todo", payload: { id } }), []);
  const deleteTodo = useCallback((id) => dispatch({ type: "delete.todo", payload: { id } }), []);
  const addTodo = useCallback((title) => dispatch({ type: "add.todo", payload: { title } }), []);
  const changeFilter = useCallback((filter) => dispatch({ type: "change.filter", payload: { filter } }), []);

  return { state, toggleTodo, deleteTodo, addTodo, changeFilter };
}

// 5. Custom Hook untuk mengambil context
export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext harus digunakan di dalam TodoContextProvider!");
  }
  return context;
}

// 6. Provider Component
export function TodoContextProvider({ children }) {
  const values = useTodoState();
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}

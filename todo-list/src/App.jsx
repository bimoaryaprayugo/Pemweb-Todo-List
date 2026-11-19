import { useState } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoEdit from "./components/TodoEdit";
import TodoDetail from "./components/TodoDetail";

function App() {
  // Data dummy
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Mengerjakan Proyek Computer Vision",
      description: "Menyelesaikan proyek computer vision.",
      priority: "high",
      deadline: "2026-11-20",
      status: "in progress",
    },
    {
      id: 2,
      title: "Mempelajari Dasar React",
      description: "Belajar useState dan components.",
      priority: "low",
      deadline: "2026-11-25",
      status: "in progress",
    },
    {
      id: 3,
      title: "Membuat Website Portfolio",
      description: "Membuat website portfolio menggunakan React.",
      priority: "low",
      deadline: "2026-11-30",
      status: "in progress",
    },
    {
      id: 4,
      title: "Mengerjakan Tugas Struktur Data",
      description: "Mempelajari algoritma DFS dan MST.",
      priority: "high",
      deadline: "2026-11-19",
      status: "todo",
    },
  ]);

  // Modal tambah
  const [showForm, setShowForm] = useState(false);

  // Data yang akan diedit
  const [selectedTodo, setSelectedTodo] = useState(null);

  // Data yang akan dilihat detailnya
  const [detailTodo, setDetailTodo] = useState(null);

  // Fungsi tambah todo
  const handleAddTodo = (newTodo) => {
    setTodos([
      ...todos,
      {
        ...newTodo,
        id: Date.now(),
      },
    ]);

    setShowForm(false);
  };

  // Fungsi membuka modal edit
  const handleEditTodo = (todo) => {
    setSelectedTodo(todo);
  };

  // Fungsi update todo
  const handleUpdateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
    );

    setSelectedTodo(null);
  };

  // Fungsi melihat detail
  const handleDetailTodo = (todo) => {
    setDetailTodo(todo);
  };

  // Fungsi menghapus todo
  const handleDeleteTodo = (id) => {
    const confirmDelete = window.confirm(
      "Apakah kamu yakin ingin menghapus tugas ini?",
    );

    if (confirmDelete) {
      setTodos(todos.filter((todo) => todo.id !== id));

      alert("Tugas berhasil dihapus!");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>

        <button className="btn-add" onClick={() => setShowForm(true)}>
          + Tambah Todo
        </button>
      </div>

      {/* Daftar Todo */}
      <TodoList
        todos={todos}
        onEdit={handleEditTodo}
        onDetail={handleDetailTodo}
        onDelete={handleDeleteTodo}
      />

      {/* Modal Tambah */}
      {showForm && (
        <TodoForm onAdd={handleAddTodo} onClose={() => setShowForm(false)} />
      )}

      {/* Modal Update */}
      {selectedTodo && (
        <TodoEdit
          todo={selectedTodo}
          onUpdate={handleUpdateTodo}
          onClose={() => setSelectedTodo(null)}
        />
      )}

      {/* Modal Detail */}
      {detailTodo && (
        <TodoDetail todo={detailTodo} onClose={() => setDetailTodo(null)} />
      )}
    </div>
  );
}

export default App;

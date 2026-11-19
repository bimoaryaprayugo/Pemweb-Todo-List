import { useState } from "react";

function TodoEdit({ todo, onUpdate, onClose }) {
  const [formData, setFormData] = useState({
    title: todo.title,
    description: todo.description,
    status: todo.status,
    priority: todo.priority,
    deadline: todo.deadline,
  });

  // Mengubah data ketika input diisi
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Menyimpan perubahan
  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate({
      ...formData,
      id: todo.id,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal modal-update">
        <h2>Update Todo</h2>

        <form onSubmit={handleSubmit}>
          <label>Judul</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label>Deskripsi</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <div className="form-row">
            <div>
              <label>Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="todo">Todo</option>
                <option value="in progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div>
              <label>Prioritas</label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <label>Deadline</label>

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
          />

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Batal
            </button>

            <button type="submit" className="btn-add">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoEdit;

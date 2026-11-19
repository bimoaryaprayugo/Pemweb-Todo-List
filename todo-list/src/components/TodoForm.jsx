function TodoForm({ onAdd, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      priority: e.target.priority.value,
      deadline: e.target.deadline.value,
    };

    onAdd(newTodo);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Tambah Todo</h2>

        <form onSubmit={handleSubmit}>
          <label>Judul</label>
          <input
            type="text"
            name="title"
            placeholder="Masukkan judul tugas"
            required
          />

          <label>Deskripsi</label>
          <textarea
            name="description"
            placeholder="Masukkan deskripsi tugas"
            required
          />

          <div className="form-row">
            <div>
              <label>Status</label>
              <select name="status">
                <option value="todo">Todo</option>
                <option value="in progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div>
              <label>Prioritas</label>
              <select name="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <label>Deadline</label>
          <input type="date" name="deadline" required />

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Batal
            </button>

            <button type="submit" className="btn-add">
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;

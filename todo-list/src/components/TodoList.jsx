function TodoList({ todos, onEdit, onDetail, onDelete }) {
  return (
    <div className="todo-table">
      <table>
        <thead>
          <tr>
            <th>Judul</th>
            <th>Status</th>
            <th>Prioritas</th>
            <th>Deadline</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>

              <td>{todo.status}</td>

              <td>{todo.priority}</td>

              <td>{todo.deadline}</td>

              <td>
                {/* Tombol Detail */}
                <button className="btn-detail" onClick={() => onDetail(todo)}>
                  Detail
                </button>

                {/* Tombol Edit */}
                <button className="btn-edit" onClick={() => onEdit(todo)}>
                  Edit
                </button>

                {/* Tombol Hapus */}
                <button
                  className="btn-delete"
                  onClick={() => onDelete(todo.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {todos.length === 0 && <p className="empty-message">Belum ada tugas.</p>}
    </div>
  );
}

export default TodoList;
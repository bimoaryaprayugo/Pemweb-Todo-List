function TodoDetail({ todo, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal modal-detail">
        <h2>Detail Todo</h2>

        <div className="detail-content">
          <div className="detail-item">
            <strong>Judul</strong>
            <p>{todo.title}</p>
          </div>

          <div className="detail-item">
            <strong>Deskripsi</strong>
            <p>{todo.description}</p>
          </div>

          <div className="detail-row">
            <div className="detail-item">
              <strong>Status</strong>
              <p>{todo.status}</p>
            </div>

            <div className="detail-item">
              <strong>Prioritas</strong>
              <p>{todo.priority}</p>
            </div>
          </div>

          <div className="detail-item">
            <strong>Deadline</strong>
            <p>{todo.deadline}</p>
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn-add" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;

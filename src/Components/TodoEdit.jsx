import { useEffect, useState } from "react";

const TodoEdit = ({ handleEdit, toBeEdited }) => {
  const { todo, id, descr } = toBeEdited;
  const [editedtodo, setEditedtodo] = useState(todo);
  const [editedDescr, setEditedDescr] = useState(descr);

  const handleSubmit = () => {
    handleEdit(id, editedtodo, editedDescr); //! 1.parametre id, 2.parametre editlenmiş todo
  };

  useEffect(() => {
    setEditedtodo(todo);
    setEditedDescr(descr);
  }, [todo, descr]);

  return (
    <div
      className="modal fade"
      id="editModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 text-info" id="exampleModalLabel">
              Edit Todo
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <label htmlFor="editedtodo" className="form-label text-dark">
              Todo
            </label>
            <input
              onKeyDown={(e) => e.keyCode === 13 && handleSubmit()}
              onChange={(e) => setEditedtodo(e.target.value)}
              value={editedtodo}
              type="text"
              className="form-control"
              name=""
              id="editedtodo"
            />
            <br></br>
            <label htmlFor="editeddescr" className="form-label text-dark">
              Description
            </label>
            <input
              onKeyDown={(e) => e.keyCode === 13 && handleSubmit()}
              onChange={(e) => setEditedDescr(e.target.value)}
              value={editedDescr}
              type="text"
              className="form-control"
              name=""
              id="editeddescr"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary "
              data-bs-dismiss="modal"
            >
              Save & Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoEdit;

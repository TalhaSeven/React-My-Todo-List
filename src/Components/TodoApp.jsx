import React, { useState } from "react";
import axios from "axios";

const TodoApp = ({ getTodos }) => {
  const [todo, setTodo] = useState("");
  const [descr, setDescr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = "https://64b022c0c60b8f941af54a76.mockapi.io/api/todo";
    try {
      await axios.post(url, { todo, descr });
    } catch (error) {
      console.log(error);
    }
    setTodo("");
    setDescr("");
    getTodos();
  };

  return (
    <>
      <div className="container w-25 mt-5">
        <h1 className="text-info text-center">My Todo</h1>
        <form
          onSubmit={handleSubmit}
          className="form-control justify-content-center p-3 bg-info-subtle"
        >
          <div className="mb-3">
            <label htmlFor="editedtodo" className="form-label text-dark">
              Todo
            </label>
            <input
              id="editedtodo"
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="form-control w-100 me-3 rounded-pill"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="editeddescr" className="form-label text-dark">
              Description
            </label>
            <input
              id="editeddescr"
              type="text"
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
              className="form-control w-100 me-3 rounded-pill"
            />
          </div>
          <button type="submit" className="btn btn-info w-100">
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoApp;
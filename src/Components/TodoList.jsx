import axios from "axios";
import { useState } from "react";
import TodoEdit from "./TodoEdit";

const TodoList = ({ todoList, getTodos }) => {
  const [toBeEdited, setToBeEdited] = useState("");

  const handleDelete = async (id) => {
    let url = `https://64b022c0c60b8f941af54a76.mockapi.io/api/todo/${id}`;
    try {
      await axios.delete(url);
    } catch (error) {}
    getTodos();
  };

  const handleEdit = async (id, todo, descr, date) => {
    let url = `https://64b022c0c60b8f941af54a76.mockapi.io/api/todo/${id}`;
    const time = new Date();
    date = `${time.getDate()}/${time.getMonth() + 1} ${time.getHours()}:${time
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    try {
      const updatedData = {
        todo,
        descr,
        date,
      };
      await axios.put(url, updatedData);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container w-50 mt-4">
        <h1 className="text-info text-center">Todo List</h1>
        {todoList.map((item) => {
          const { todo, id, descr, date } = item;
          return (
            <div
              key={id}
              className="row row-cols-auto bg-success-subtle m-0 mb-2 p-2 rounded-pill"
            >
              <div className="col-8">
                <span className="m-0 flex-grow-1">{todo}</span>
                <span className="m-0 flex-grow-1">{descr}</span>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center">
                <span className="m-0">{date}</span>
                <div className="ms-auto">
                  <button
                    onClick={() => setToBeEdited(item)}
                    className="btn btn-link"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                  >
                    <i className="fa-solid fa-pen-to-square" />
                  </button>
                  <button
                    onClick={() => handleDelete(id)}
                    className="btn btn-link"
                  >
                    <i className="fa-solid fa-trash" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <TodoEdit toBeEdited={toBeEdited} handleEdit={handleEdit} />
      </div>
    </>
  );
};

export default TodoList;

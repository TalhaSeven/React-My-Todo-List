import axios from "axios";
import {useState} from "react";
import TodoEdit from "./TodoEdit";

const TodoList = ({ todoList, getTodos }) => {

  const [toBeEdited, setToBeEdited] = useState("")

  const handleDelete = async (id) => {
    let url = `https://64b022c0c60b8f941af54a76.mockapi.io/api/todo/${id}`;
    try {
      await axios.delete(url);
    } catch (error) {}
    getTodos();
  };

  const handleEdit = async (id,todo,descr) => {
    let url = `https://64b022c0c60b8f941af54a76.mockapi.io/api/todo/${id}`;
    try {
      await axios.put(url,{todo,descr})
    } catch (error) {
      console.log(error);
    }
    getTodos()
  }

  return (
    <>
      <div className="container w-50 mt-4">
        <h1 className="text-info text-center">Todo List</h1>
        {todoList.map((item) => {
          const { todo, id, descr } = item;

          return (
            <div key={id} className="row bg-success-subtle m-0 mb-2 p-2 rounded-pill">
              <div className="col-10">
                <span className="m-0">{todo} </span><span className="m-0">{descr}</span>
              </div>
              <div className="col-2 d-flex justify-content-center align-items-center">
                <i
                  onClick={ () => setToBeEdited(item) }
                  className="fa-solid fa-pen-to-square me-3 "
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                ></i>
                <i
                  onClick={() => handleDelete(id)}
                  className="fa-solid fa-trash"
                ></i>
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

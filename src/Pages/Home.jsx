import { useEffect, useState } from "react";
import TodoApp from "../Components/TodoApp";
import TodoList from "../Components/TodoList";
import axios from "axios";

const Home = () => {

  const [todoItems, setTodoItems] = useState([]);

  const getTodos = async () => {
    let url = "https://64b022c0c60b8f941af54a76.mockapi.io/api/todo";
    try {
      let { data } = await axios(url);
      setTodoItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
    }, []);

  return (
    <>
      <TodoApp getTodos={getTodos} />
      <TodoList todoList={todoItems} getTodos={getTodos} />
    </>
  );
};

export default Home;

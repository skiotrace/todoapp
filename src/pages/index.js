import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

export function CustomTag({ text, onDelete }) {
  return (
    <div className="flex items-center bg-secondary text-gray font-medium rounded-full  px-3 py-1 gap-1">
      {text}
      <button
        className="font-semibold ml-1 text-lg text-red-400 justify-center shadow-lg"
        onClick={onDelete}
      >
        <AiOutlineDelete />
      </button>
    </div>
  );
}

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = () => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addTodo = () => {
    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newTodo }),
    })
      .then((res) => res.json())
      .then((d) => d)
      .then(() => {
        fetchTodos();
        setNewTodo("");
        console.log("newTodo:", newTodo);
      });
  };

  const deleteTodo = (id) => {
    console.log(id);
    fetch(`/api/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetchTodos();
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex bg-gradient justify-center pt-16 h-screen">
      <div className="flex flex-col space-y-5 w-[60vh] h-[50vh] p-6 rounded-lg shadow-2xl bg-gradientinner border-2 border-purple-900">
        <input
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          placeholder="Add To-Do"
          value={newTodo}
          className="rounded bg-secondary border-2 border-purple-900 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-transparent w-full"
        />
        <button
          className="rounded-lg shadow-lg p-2 bg-purple-900 text-white hover:bg-purple-700 focus:outline-none"
          onClick={addTodo}
        >
          Add todo
        </button>
        <div className="flex flex-wrap gap-2">
          {todos.map((todo) => (
            <CustomTag
              key={todo._id}
              text={todo.text}
              onDelete={() => {
                deleteTodo(todo._id);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

import { Todo } from "@/stores/Types";
import Gradienttext from "@/components/Gradienttext";
import $todos from "@/stores/todos";
import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";

const Eachtodo = () => {
  const todos: Todo[] = useStore($todos);

  const todo: Todo = todos[Math.floor(Math.random() * todos.length)];

  return (
    <div className="w-full min-h-screen gap-y-8 pt-20 flex items-center flex-col relative">
      <div className="w-full px-8 text-left">
        <Gradienttext className="text-6xl font-bold" text="Random" />
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl">{todo.title}</h2>
          <p className="text-xs">ID : {todo.id}</p>
          <p>{todo.time}</p>
          <p>{todo.description}</p>
          <div className="card-actions justify-end">
            <Link to={`/todos/${todo.id}`} className="btn btn-primary">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eachtodo;

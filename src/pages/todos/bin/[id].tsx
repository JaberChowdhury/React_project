import Gradienttext from "@/components/Gradienttext";
import { useParams } from "react-router-dom";
import { Todo } from "@/stores/Types";
import $todos from "@/stores/todos";
import $todosbin from "@/stores/todosbin";
import { useStore } from "@nanostores/react";

const Eachtodo = () => {
  const { id } = useParams();
  const todos: Todo[] = useStore($todos);
  const todosbin: Todo[] = useStore($todosbin);
  const todo: Todo | undefined = todosbin.find((data) => data.id === id);

  const handleDelete = () => {
    if (todo) {
      const withoutTodo = todosbin.filter((data: Todo) => data.id !== id);
      $todosbin.set(withoutTodo);
    }
  };

  const handleRestore = () => {
    if (todo) {
      const withoutTodo = todosbin.filter((data: Todo) => data.id !== id);
      $todosbin.set(withoutTodo);
      $todos.set([...todos, todo]);
    }
  };

  return (
    <div className="w-full min-h-screen gap-y-8 pt-20 flex items-center flex-col relative">
      {todo ? (
        <>
          <div className="w-full px-8 text-left">
            <Gradienttext className="text-6xl font-bold" text="Todo" />
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-4xl">{todo.title}</h2>
              <p className="text-xs">ID : {todo.id}</p>
              <p>{todo.time}</p>
              <p>{todo.description}</p>
              <div className="card-actions justify-end">
                <button onClick={handleDelete} className="btn btn-primary">
                  Delete permanently
                </button>
                <button onClick={handleRestore} className="btn btn-primary">
                  Restore
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Gradienttext text="Can't find the todo" />
      )}
    </div>
  );
};

export default Eachtodo;

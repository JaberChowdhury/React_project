import Gradienttext from "@/components/Gradienttext";
import { useParams } from "react-router-dom";
import { Todo } from "@/stores/Types";
import $todos from "@/stores/todos";
import $todosbin from "@/stores/todosbin";
import { useStore } from "@nanostores/react";
import { SubmitHandler } from "react-hook-form";
import Form, { FormData } from "@/components/Form";

const Eachtodo = () => {
  const { id } = useParams();
  const todos: Todo[] = useStore($todos);
  const todosbin: Todo[] = useStore($todosbin);

  const todo: Todo | undefined = todos.find((data) => data.id === id);

  const onSubmit: SubmitHandler<FormData> = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const updatedTodos = todos.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          ...value,
          time: new Date().toLocaleString(),
        };
      } else {
        return data;
      }
    });
    $todos.set(updatedTodos);
  };

  const handleDelete = () => {
    if (todo) {
      $todosbin.set([...todosbin, todo]);
    }
    const withoutTodo = todos.filter((data: Todo) => data.id !== id);
    $todos.set(withoutTodo);
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
                  Delete
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    (
                      document.getElementById(
                        "my_modal_5",
                      ) as HTMLDialogElement | null
                    )?.showModal()
                  }
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Gradienttext text="Can't find the todo" />
      )}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <Form
            onSubmit={onSubmit}
            position="Edit"
            defaultValues={{
              title: todo?.title || "something isn't good",
              description: todo?.description || "something isn't good",
              checked: todo?.checked || false,
            }}
          />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Eachtodo;

import Gradienttext from "@/components/Gradienttext";
import { useParams } from "react-router-dom";
import { Todo } from "@/stores/Types";
import $todos from "@/stores/todos";
import $todosbin from "@/stores/todosbin";
import { useStore } from "@nanostores/react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Eachtodo = () => {
  const { id } = useParams();
  const todos: Todo[] = useStore($todos);
  const todosbin: Todo[] = useStore($todosbin);

  const todo: Todo | undefined = todos.find((data) => data.id === id);

  const Errorbox = ({ message }: { message: string | undefined }) => {
    return (
      <div className="w-[250px] p-2 text-center text-rose-600 border-2 border-rose-900">
        {message || "Wow"}
      </div>
    );
  };

  const fieldType = z.object({
    title: z.string().min(5).max(25),
    description: z.string().min(5).max(50),
    checked: z.boolean(),
  });

  type Input = z.infer<typeof fieldType>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Input>({
    resolver: zodResolver(fieldType),
    defaultValues: {
      title: todo?.title,
      description: todo?.description,
      checked: todo?.checked,
    },
  });

  const onSubmit: SubmitHandler<Input> = async (value) => {
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
          <form onSubmit={handleSubmit(onSubmit)} className="relative ">
            <div className="w-full text-left">
              <Gradienttext className="text-6xl font-bold" text="Edit" />
            </div>
            <div className="flex justify-center flex-col gap-y-4">
              <label htmlFor="title" className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Title here</span>
                </div>
                <input
                  type="text"
                  {...register("title")}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              {errors.title && <Errorbox message={errors.title.message} />}
              <label htmlFor="description" className="form-control">
                <div className="label">
                  <span className="label-text">Description here</span>
                </div>
                <textarea
                  {...register("description")}
                  className="textarea textarea-bordered h-24"
                  placeholder="Description"
                ></textarea>
              </label>
              {errors.description && (
                <Errorbox message={errors.description.message} />
              )}
              <div className="form-control">
                <label htmlFor="checked" className="cursor-pointer label">
                  <span className="label-text">Checked ?</span>
                  <input
                    {...register("checked")}
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                </label>
                {errors.checked && (
                  <Errorbox message={errors.checked.message} />
                )}
              </div>
            </div>
            <button type="submit" className="btn w-full">
              {isSubmitting ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Update"
              )}
            </button>
          </form>
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

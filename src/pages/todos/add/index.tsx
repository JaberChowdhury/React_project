import Gradienttext from "@/components/Gradienttext";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import $todos from "@/stores/todos";
import { useStore } from "@nanostores/react";
import Todoslist from "@/pages/todos";

const Add = () => {
  const todos = useStore($todos);

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
      title: "curd web app !!!",
      description: "description should be longer that the title",
      checked: false,
    },
  });

  const onSubmit: SubmitHandler<Input> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const updatedTodos = [
      ...todos,
      {
        ...data,
        id: crypto.randomUUID(),
        time: new Date().toLocaleString(),
      },
    ];
    $todos.set(updatedTodos);
  };

  return (
    <div className="w-full min-h-screen flex items-center flex-col relative pt-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h-screen relative "
      >
        <div className="w-full text-left">
          <Gradienttext className="text-6xl font-bold" text="Add" />
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
            {errors.checked && <Errorbox message={errors.checked.message} />}
          </div>
        </div>
        <button type="submit" className="btn w-full">
          {isSubmitting ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            "Add todo"
          )}
        </button>
      </form>
      <Todoslist />
    </div>
  );
};

export default Add;

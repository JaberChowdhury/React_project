import Form, { FormData } from "@/components/Form";
import Todoslist from "@/pages/todos";
import { SubmitHandler } from "react-hook-form";
import $todos from "@/stores/todos";
import { useStore } from "@nanostores/react";

const Add = () => {
  const todos = useStore($todos);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
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
      <div className="w-full min-h-[70vh] flex justify-center items-center relative">
        <Form
          position="add"
          onSubmit={onSubmit}
          defaultValues={{
            title: "curd web app !!!",
            description: "description should be longer that the title",
            checked: false,
          }}
        />
      </div>
      <Todoslist />
    </div>
  );
};

export default Add;

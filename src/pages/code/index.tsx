import Hignlighter from "@/components/Code";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex items-center flex-col relative">
      <div className="card rounded p-4 w-[400px] md:w-full">
        <h2 className="card-title my-2">Reusable Form components</h2>
        <Hignlighter
          hl={[1, 13]}
          code={`// src/components/Form.tsx
import Gradienttext from "@/components/Gradienttext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export interface FormData {
  title: string;
  description: string;
  checked: boolean;
}
interface propsType {
  onSubmit: (data: FormData) => void;
  defaultValues: FormData;
  position: string;
}

const Form = ({ onSubmit, defaultValues, position }: propsType) => {
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
    defaultValues: defaultValues || {
      title: "curd web app !!!",
      description: "description should be longer that the title",
      checked: false,
    },
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full p-4 relative">
      <div className="w-full text-left">
        <Gradienttext
          className="text-6xl font-bold"
          text={position === "add" ? "Add" : "Edit"}
        />
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
        ) : position === "add" ? (
          "Add todo"
        ) : (
          "Update todo"
        )}
      </button>
    </form>
  );
};

export default Form;
`}
        />
      </div>
      <div className="card rounded p-4 w-[400px] md:w-full">
        <h2 className="card-title my-2">Gradient text</h2>
        <Hignlighter
          hl={[14, 17]}
          code={`import { cn } from "@/lib/utils";

interface propsType {
  text: string;
  className?: string;
}

const Gradienttext = ({ text, className }: propsType) => {
  return (
    <span className={cn("inline-grid", className)}>
      <span
        className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [transform:translate3d(0,0,0)] [-webkit-text-fill-color:transparent] before:content-[attr(data-text)] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
        aria-hidden="true"
        data-text={text}
      ></span>
      <span className="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
        {text}
      </span>
    </span>
  );
};

export default Gradienttext;
`}
        />
      </div>
      <div className="card rounded p-4 w-[400px] md:w-full">
        <h2 className="card-title my-2">Code Hignlighter</h2>
        <Hignlighter
          hl={[5, 16, 20]}
          code={`import Gradienttext from "@/components/Gradienttext";

type propsType = {
  code: string;
  hl?: number[];
};

const Hignlighter = ({ code, hl }: propsType) => {
  const array = code.toString().split("\n");

  return (
    <pre className="w-full">
      <div className="mockup-code rounded">
        {array.map((line: string, index: number) => {
          if (hl && hl.includes(index + 1)) {
            return (
              <pre className="text-warning" key={index} data-prefix={index + 1}>
                <code>
                  <Gradienttext text={line} />
                </code>
              </pre>
            );
          }
          return (
            <pre key={index} data-prefix={index + 1}>
              <code>{line}</code>
            </pre>
          );
        })}
      </div>
    </pre>
  );
};

export default Hignlighter;
`}
        />
      </div>
    </div>
  );
};

export default Home;

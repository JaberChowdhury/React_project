import { atom } from "nanostores";
import { Todo } from "./Types";

const initialState: Todo[] = [
  {
    id: "96bef5ee-75dc-4a1e-81c7-7449cef11bcb",
    title: "Read a book",
    description: "Revision on class in typescript (public,private)",
    time: "26/01/2024, 17:13:19",
    checked: false,
  },
];

const $todos = atom(initialState);

export default $todos;

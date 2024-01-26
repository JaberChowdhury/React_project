import { atom } from "nanostores";
import { Todo } from "./Types";
const initialState: Todo[] = [
  {
    id: "96bef5ee-75dc-4a1e-81c7-7449cef11bcb",
    title: "Go to market",
    description: "Buy some beef for dinner",
    time: "26/01/2024, 17:13:19",
    checked: false,
  },
];
const $todosbin = atom(initialState);
export default $todosbin;

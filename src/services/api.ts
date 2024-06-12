import axios from "axios";
import { Todo } from "../types/Todo";

const BASE_URL = "http://localhost:3000";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getTodos = async () => {
  return (await axiosInstance.get<Todo[]>("/todos")).data;
};

export const getTodosIds = async () => {
  return (await axiosInstance.get<Todo[]>("/todos")).data.map(
    (todo) => todo.id,
  );
};

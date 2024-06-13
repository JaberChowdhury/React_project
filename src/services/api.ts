import axiosInstance from "axios";
import { Todo } from "../types/Todo";

const BASE_URL = "http://localhost:3000";

const axios = axiosInstance.create({ baseURL: BASE_URL });

export const getTodos = async () => {
  return (await axios.get<Todo[]>("/todos")).data;
};

export const getTodosIds = async () => {
  return (await axios.get<Todo[]>("/todos")).data.map((todo) => todo.id);
};

export const getTodo = async (id: string) => {
  return (await axios.get<Todo>(`/todos/${id}`)).data;
};

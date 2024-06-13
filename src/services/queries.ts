import { useQuery, useQueries } from "@tanstack/react-query";
import { getTodos, getTodo } from "./api";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};

export const useTodo = (ids: string[] | undefined) => {
  return useQueries({
    queries: (ids || []).map((id) => {
      return {
        queryKey: ["todo", id],
        queryFn: () => getTodo(id),
      };
    }),
  });
};

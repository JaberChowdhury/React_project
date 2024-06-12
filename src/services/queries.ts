import { useQuery } from "@tanstack/react-query";
import { getTodosIds } from "./api";

export const useTodosIds = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodosIds,
  });
};

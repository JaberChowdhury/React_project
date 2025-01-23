import { create } from "zustand";

interface stateTytpe {
  password: string;
}

const useStore = create<stateTytpe>((set) => {
  password: "";
});

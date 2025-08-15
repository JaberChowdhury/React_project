import { create } from "zustand";

interface Store {
  count: number;
  inc: () => void;
}

const useHabits = create<Store>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export default useHabits;

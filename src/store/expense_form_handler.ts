import { create } from "zustand";
interface Expense_Form {
  title: string;
  cost: string;
  handleTitle: (data: string) => void;
  handleCost: (data: string) => void;
  handleClear: () => void;
}

const useExpenseForm = create<Expense_Form>((set) => ({
  title: "",
  cost: "",
  handleTitle: (data: string) => set((state) => ({ ...state, title: data })),
  handleCost: (data: string) => set((state) => ({ ...state, cost: data })),
  handleClear: () => set(() => ({ title: "", cost: "" })),
}));

export default useExpenseForm;

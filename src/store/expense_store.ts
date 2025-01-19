import { create } from "zustand";
import { faker } from "@faker-js/faker";

export interface EXPENSE_STATE {
  id: string;
  cost: number;
  time: string;
  title: string;
}

export interface EXPENSE_ACTION {
  addExpense: (data: EXPENSE_STATE) => void;
  deleteExpense: (id: string) => void; // Use ID for deletion
}

export interface EXPENSE_STORE extends EXPENSE_ACTION {
  expenses: EXPENSE_STATE[]; // Add expenses array to the state
}

const useExpenseStore = create<EXPENSE_STORE>((set) => ({
  expenses: [
    {
      id: crypto.randomUUID(),
      cost: Number(faker.commerce.price({ min: 100, max: 3000 })),
      time:
        new Date().toLocaleDateString() +
        "    |    " +
        new Date().toLocaleTimeString(),
      title: faker.food.vegetable(),
    },
    {
      id: crypto.randomUUID(),
      cost: Number(faker.commerce.price({ min: 100, max: 3000 })),
      time:
        new Date().toLocaleDateString() +
        "    |    " +
        new Date().toLocaleTimeString(),
      title: faker.food.vegetable(),
    },
    {
      id: crypto.randomUUID(),
      cost: Number(faker.commerce.price({ min: 100, max: 3000 })),
      time:
        new Date().toLocaleDateString() +
        "    |    " +
        new Date().toLocaleTimeString(),
      title: faker.food.vegetable(),
    },
    {
      id: crypto.randomUUID(),
      cost: Number(faker.commerce.price({ min: 100, max: 3000 })),
      time:
        new Date().toLocaleDateString() +
        "    |    " +
        new Date().toLocaleTimeString(),
      title: faker.food.vegetable(),
    },
    {
      id: crypto.randomUUID(),
      cost: Number(faker.commerce.price({ min: 100, max: 3000 })),
      time:
        new Date().toLocaleDateString() +
        "    |    " +
        new Date().toLocaleTimeString(),
      title: faker.food.vegetable(),
    },
    {
      id: crypto.randomUUID(),
      cost: Number(faker.commerce.price({ min: 100, max: 3000 })),
      time:
        new Date().toLocaleDateString() +
        "    |    " +
        new Date().toLocaleTimeString(),
      title: faker.food.vegetable(),
    },
    {
      id: crypto.randomUUID(),
      cost: Number(faker.commerce.price({ min: 100, max: 3000 })),
      time:
        new Date().toLocaleDateString() +
        "    |    " +
        new Date().toLocaleTimeString(),
      title: faker.food.vegetable(),
    },
    {
      id: crypto.randomUUID(),
      cost: Number(faker.commerce.price({ min: 100, max: 3000 })),
      time:
        new Date().toLocaleDateString() +
        "    |    " +
        new Date().toLocaleTimeString(),
      title: faker.food.vegetable(),
    },
    {
      id: crypto.randomUUID(),
      cost: Number(faker.commerce.price({ min: 100, max: 3000 })),
      time:
        new Date().toLocaleDateString() +
        "    |    " +
        new Date().toLocaleTimeString(),
      title: faker.food.fruit(),
    },
    {
      id: crypto.randomUUID(),
      cost: Number(faker.commerce.price({ min: 100, max: 3000 })),
      time:
        new Date().toLocaleDateString() +
        "    |    " +
        new Date().toLocaleTimeString(),
      title: faker.food.vegetable(),
    },
    {
      id: crypto.randomUUID(),
      cost: Number(faker.commerce.price({ min: 100, max: 3000 })),
      time:
        new Date().toLocaleDateString() +
        "    |    " +
        new Date().toLocaleTimeString(),
      title: faker.food.fruit(),
    },
    {
      id: crypto.randomUUID(),
      cost: Number(faker.commerce.price({ min: 100, max: 3000 })),
      time:
        new Date().toLocaleDateString() +
        "    |    " +
        new Date().toLocaleTimeString(),
      title: faker.food.vegetable(),
    },
  ], // Initialize with an empty array
  addExpense: (data: EXPENSE_STATE) =>
    set((state) => ({ expenses: [...state.expenses, data] })), // Add expense to the array
  deleteExpense: (id: string) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id), // Remove expense by ID
    })),
}));

export default useExpenseStore;

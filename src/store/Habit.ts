import { create } from "zustand";
import * as z from "zod";

// Habit schema
const HabitStructure = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  categories: z.array(z.string()),
  createdAt: z.string(),
  deletedAt: z.string().nullable().default(null),
  isCompleted: z.boolean().default(false),
  priority: z.enum(["low", "medium", "high"]).default("medium"),
});
export type Habit = z.infer<typeof HabitStructure>;

interface HabitState {
  habits: Habit[];
  deletedHabits: Habit[];
  // CRUD
  addHabit: (habit: Omit<Habit, "id" | "createdAt" | "deletedAt">) => void;
  updateHabit: (id: string, updates: Partial<Habit>) => void;
  deleteHabit: (id: string) => void;
  restoreHabit: (id: string) => void;
  getHabit: (id: string) => Habit | undefined;
  // Setters for full overwrite
  setHabits: (habits: Habit[]) => void;
  setDeletedHabits: (habits: Habit[]) => void;
}

// Load state from localStorage
const loadState = (): Partial<HabitState> => {
  try {
    const stored = localStorage.getItem("habitState");
    if (!stored) return {};
    return JSON.parse(stored);
  } catch {
    return {};
  }
};

// Save to localStorage helper
const saveState = (state: HabitState) => {
  const plainState = {
    habits: state.habits,
    deletedHabits: state.deletedHabits,
  };
  localStorage.setItem("habitState", JSON.stringify(plainState));
};

const useHabit = create<HabitState>((set, get) => ({
  habits: [
    {
      id: "19c6a77c-7911-4ff2-8d03-15f93486a7ca",
      title: "Habit 1",
      description: "This is a description for habit 1.",
      categories: ["learning"],
      createdAt: "2024-09-29T18:25:30.585660",
      deletedAt: null,
      isCompleted: true,
      priority: "low",
    },
    {
      id: "02905b95-9069-49ad-be8a-03961143c185",
      title: "Habit 2",
      description: "This is a description for habit 2.",
      categories: ["finance", "productivity"],
      createdAt: "2024-12-29T18:25:30.585747",
      deletedAt: "2025-07-04T18:25:30.585756",
      isCompleted: false,
      priority: "low",
    },
    {
      id: "413277d2-4db4-4fd5-a9fc-f77472e56db7",
      title: "Habit 3",
      description: "This is a description for habit 3.",
      categories: ["learning"],
      createdAt: "2025-02-22T18:25:30.585807",
      deletedAt: "2025-06-30T18:25:30.585814",
      isCompleted: true,
      priority: "medium",
    },
  ],
  deletedHabits: [
    {
      id: "b52e0adf-b7a0-448d-9005-0741ff2b7e6b",
      title: "Habit 4",
      description: "This is a description for habit 4.",
      categories: ["personal", "finance"],
      createdAt: "2024-10-02T18:25:30.585860",
      deletedAt: null,
      isCompleted: true,
      priority: "high",
    },
    {
      id: "5c87a3f7-3c3d-4c08-bd9e-706937aeac6e",
      title: "Habit 5",
      description: "This is a description for habit 5.",
      categories: ["work", "creativity", "health"],
      createdAt: "2024-12-25T18:25:30.585908",
      deletedAt: null,
      isCompleted: true,
      priority: "low",
    },
  ],

  // Add new habit
  addHabit: (habitData) => {
    const newHabit: Habit = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      deletedAt: null,
      ...habitData,
    };
    set((state) => {
      const updated = { ...state, habits: [...state.habits, newHabit] };
      saveState(updated);
      return updated;
    });
  },

  // Update existing habit
  updateHabit: (id, updates) => {
    set((state) => {
      const updatedHabits = state.habits.map((h) =>
        h.id === id ? { ...h, ...updates } : h
      );
      const updated = { ...state, habits: updatedHabits };
      saveState(updated);
      return updated;
    });
  },

  // Soft delete habit (move to deletedHabits)
  deleteHabit: (id) => {
    set((state) => {
      const habitToDelete = state.habits.find((h) => h.id === id);
      if (!habitToDelete) return state;
      const updated = {
        habits: state.habits.filter((h) => h.id !== id),
        deletedHabits: [
          ...state.deletedHabits,
          { ...habitToDelete, deletedAt: new Date().toISOString() },
        ],
      };
      saveState(updated as HabitState);
      return updated as HabitState;
    });
  },

  // Restore deleted habit
  restoreHabit: (id) => {
    set((state) => {
      const habitToRestore = state.deletedHabits.find((h) => h.id === id);
      if (!habitToRestore) return state;
      const updated = {
        habits: [...state.habits, { ...habitToRestore, deletedAt: null }],
        deletedHabits: state.deletedHabits.filter((h) => h.id !== id),
      };
      saveState(updated as HabitState);
      return updated as HabitState;
    });
  },

  // Get a habit by ID
  getHabit: (id) => {
    return get().habits.find((h) => h.id === id);
  },

  // Replace all habits
  setHabits: (habits) => {
    set((state) => {
      const updated = { ...state, habits };
      saveState(updated);
      return updated;
    });
  },

  // Replace deleted habits
  setDeletedHabits: (deletedHabits) => {
    set((state) => {
      const updated = { ...state, deletedHabits };
      saveState(updated);
      return updated;
    });
  },

  // Hydrate from localStorage
  ...loadState(),
}));

export default useHabit;

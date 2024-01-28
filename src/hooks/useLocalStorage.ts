import { useState, useEffect } from "react";

type InitialValueType<T> = T | (() => T);

function getSavedValue<T>(key: string, initialValue: InitialValueType<T>): T {
  const savedValue = JSON.parse(localStorage.getItem(key) || "null");

  if (savedValue !== null) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue as T;
}

export default function useLocalStorage<T>(
  key: string,
  initialValue: InitialValueType<T>,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    return getSavedValue<T>(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

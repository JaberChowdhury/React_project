import React, { useEffect } from "react";
import useHabit from "../store/Habit";

interface Props {
  children: React.ReactNode;
}

const LocalStorageWrapper: React.FC<Props> = ({ children }) => {
  const state = useHabit();

  useEffect(() => {
    const plainState = Object.fromEntries(
      Object.entries(state).filter(([_, value]) => typeof value !== "function")
    );

    localStorage.setItem("habitState", JSON.stringify(plainState));
  }, [state]);

  return <>{children}</>;
};

export default LocalStorageWrapper;

import React, { createContext, useContext, useEffect, useState } from "react";
import DrivelinkToCdn from "~/lib/DrivelinkToCdn";

export type DOCTOR_TYPES = {
  id: number;
  image: string;
  name: string;
  education: string;
  speciality: string;
  experience: string;
  registrationNumber: string;
  designation: string;
  workplace: string;
  fee: string;
  isAppointed: boolean;
  availability: string[];
};

export type CONTEXT_TYPE = {
  doctors: DOCTOR_TYPES[];
  isLoading: boolean;
  error: null | string;
  updateDoctor: (id: number) => void;
};

const doctorContext = createContext<CONTEXT_TYPE>({
  doctors: [],
  isLoading: true,
  error: null,
  updateDoctor: () => {},
});

type propstype = {
  children: React.ReactNode;
};

const DoctorContextProvider: React.FC<propstype> = ({ children }) => {
  const [doctors, setDoctors] = useState<DOCTOR_TYPES[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await delay(20);
        const response = await fetch(
          "https://gist.githubusercontent.com/JaberChowdhury/b2e5e5133c35977f11b85cf11d5b3777/raw/9556eb0d688dc880507d66aac8f01c8eb75c1ca6/gistfile1.txt"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch doctor data");
        }
        const data: DOCTOR_TYPES[] = await response.json();
        setDoctors(data);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const updateDoctor = (id: number) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doctor) =>
        doctor.id === id ? { ...doctor, isAppointed: true } : doctor
      )
    );
  };

  console.log({ doctors, isLoading, error });

  const value = { doctors, isLoading, error, updateDoctor };

  return (
    <doctorContext.Provider value={value}>{children}</doctorContext.Provider>
  );
};

export const useDoctors = () => {
  return useContext(doctorContext);
};
export { doctorContext };
export default DoctorContextProvider;

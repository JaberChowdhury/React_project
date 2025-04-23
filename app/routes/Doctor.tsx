import React from "react";
import Doctors from "~/components/doctor/Doctors";
import Hero from "~/components/doctor/Hero";
import Review from "~/components/doctor/Review";
import Loading from "~/components/Loading";
import { useDoctors } from "~/context/DoctorContextProvider";

const Doctor = () => {
  const { isLoading } = useDoctors();
  return (
    <div className="container mx-auto flex justify-center items-center flex-col gap-y-6">
      {isLoading ? (
        <div className="w-full min-h-screen flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <>
          <Hero />
          <Doctors />
          <Review />
        </>
      )}
    </div>
  );
};

export default Doctor;

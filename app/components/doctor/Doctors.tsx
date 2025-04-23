import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { useDoctors } from "~/context/DoctorContextProvider";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const Doctors = () => {
  const { doctors, isLoading, error } = useDoctors();
  return (
    <div className="w-full justify-center items-center flex-col">
      <CardHeader className="w-full text-4xl font-bold text-center">
        Our Best Doctors
      </CardHeader>
      <CardDescription className="text-center my-5">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </CardDescription>
      <div className="w-full flex justify-around items-center flex-wrap gap-y-5">
        {doctors.slice(0, 4).map((item) => (
          <Card key={item.registrationNumber}>
            <CardContent>
              <div className="w-full flex justify-center items-center">
                <img
                  className="size-60 rounded-md border border-slate-500 object-scale-down"
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
              </div>
            </CardContent>
            <CardContent className="flex flex-col justify-start items-start gap-y-3">
              <div className="w-full flex justify-start items-start gap-x-3">
                {item.isAppointed ? (
                  <div className="text-xs text-red-600 bg-red-200 border border-red-600 rounded-full py-1 text-center px-7">
                    Not Available
                  </div>
                ) : (
                  <div className="text-xs text-green-600 border border-green-600 bg-green-100 py-1 text-center rounded-full px-7">
                    Available
                  </div>
                )}
                <div className="text-xs text-yellow-600 bg-yellow-100 border border-yellow-600 py-1 text-center rounded-full px-7">
                  {item.experience} experience
                </div>
              </div>

              <div className="text-xl font-black">{item.name}</div>
              <CardDescription className="text-xs">
                {item.education}
              </CardDescription>

              <Separator />
              <CardDescription>
                Reg No : {item.registrationNumber}
              </CardDescription>
              <Button
                variant="outline"
                className="w-full text-blue-400 border-blue-400 border my-5 font-bold"
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Doctors;

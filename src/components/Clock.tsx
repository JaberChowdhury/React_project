import useTime from "@/hooks/useTime";
import React from "react";

const Clock = () => {
  const { hour, minute, second } = useTime();

  const units = [
    { label: "Hours", value: hour },
    { label: "Minutes", value: minute },
    { label: "Seconds", value: second },
  ];

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      {units.map((unit) => (
        <div key={unit.label} className="btn btn-ghost">
          <div className="flex rounded flex-col p-2 bg-neutral text-neutral-content">
            {unit.label}
            <span className="countdown font-mono text-5xl">
              <span
                style={{ "--value": unit.value } as React.CSSProperties}
              ></span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clock;

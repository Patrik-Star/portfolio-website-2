import React from "react";

type chronologicalSwitchProps = {
  chrono: boolean;
  setChrono: (value: boolean) => void;
}

export const ChronologicalSwitch  = ({
  chrono,
  setChrono,
}: chronologicalSwitchProps) => {
  return (
    <div className="w-full flex justify-end md:justify-end pb-10 md:pb-5 pt-3">
      <div className="shadow rounded-2xl flex p-1 relative items-center bg-gray-200">
        <div
          className={`w-full rounded-xl flex justify-center ${
            chrono
              ? "bg-indigo-600 text-white"
              : "bg-gray-300 dark:text-gray-900"
          }`}
        >
          <button
            className="text-sm px-10 py-1"
            onClick={() => setChrono(true)}
          >
            Chronological
          </button>
        </div>
        <div
          className={`ml-1 w-full rounded-xl flex justify-center ${
            !chrono
              ? "bg-indigo-600 text-white"
              : "bg-gray-300 dark:text-gray-900"
          }`}
        >
          <button
            className="text-sm px-10 py-1"
            onClick={() => setChrono(false)}
          >
            Latest
          </button>
        </div>
      </div>
    </div>
  );
}


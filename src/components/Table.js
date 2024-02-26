import React, { useState, useEffect } from "react";

const Table = () => {
  const [result, setResult] = useState([]);
  console.log("====================================");
  console.log(result);
  console.log("====================================");

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
    )
      .then((response) => response.json())
      .then((json) => setResult(json.appointments));
  }, []);

  return (
    <div>
      <div class="text-xl text-gray-700 font-extrabold mx-5 my-10 text-left uppercase">
        Today's appointment list
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
        <table class="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xl text-gray-700 h-20		 uppercase bg-slate-100	 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                PATIENTS
              </th>
              <th scope="col" class="px-6 py-3">
                DATE
              </th>
              <th scope="col" class="px-6 py-3">
                TIME
              </th>
              <th scope="col" class="px-6 py-3">
                DOCTOR
              </th>
              <th scope="col" class="px-6 py-3">
                INJURY
              </th>
              <th scope="col" class="px-6 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {result.map((item) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      class="w-10 h-10 rounded-full"
                      src="data:image/jpeg;base64,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"
                      alt="Jese image"
                    />
                    <div class="ps-3">
                      <div class="text-base font-semibold">
                        {item.patient_name}
                      </div>
                      <div class="font-normal text-gray-500">
                        {item.mobile_number}
                      </div>
                    </div>
                    <br />
                  </th>
                  <td class="px-6 py-4">🗒️{item.appointment_date} </td>
                  <td class="px-6 py-4">⏲️{item.appointment_time}</td>
                  <td class="px-6 py-4">👨‍⚕️{item.doctor}</td>
                  <td class="px-6 py-4">
                    <div class="row-span-3">
                      <button
                        type="button"
                        disabled
                        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        {item.injury}
                      </button>{" "}
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

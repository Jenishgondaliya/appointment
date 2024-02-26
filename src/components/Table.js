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
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.patient_name}
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

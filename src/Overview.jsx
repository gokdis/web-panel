import axios from "axios";
import { useEffect, useState } from "react";

const stats = [
  { name: "Number of users", value: "405" },
  { name: "Connect time", value: "3.65", unit: "seconds" },
  { name: "Number of servers", value: "1" },
  { name: "Success rate", value: "98.5%" },
];
const statuses = {
  Completed: "text-green-400 bg-green-400/10",
  Error: "text-rose-400 bg-rose-400/10",
};
const items = [
  {
    id: 1,
    name: "Emu Bird",
    email: "emu@bird.com",
    dob: "10-12-1932",
    phone: "555-555-55-55",
    adress: "Australia",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Overview() {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_REACT_APP_API +"/person",
          {
            auth: {
              username: import.meta.env.VITE_REACT_APP_USERNAME,
              password: import.meta.env.VITE_REACT_APP_PASSWORD,
            },
          }
        );
        setPerson(res.data);
      } catch (error) {
        console.error("Error fetching persons data:", error);
      }
    };

    fetchPerson();
  }, []);

  return (
    <>
      <main>
        <header>
          {/* Heading */}
          <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <div>
              <div className="flex items-center gap-x-3">
                <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                  <div className="h-2 w-2 rounded-full bg-current" />
                </div>
                <h1 className="flex gap-x-3 text-base leading-7">
                  <span className="font-semibold text-white">
                    Server status
                  </span>
                  <span className="text-gray-600">/</span>
                  <span className="font-semibold text-white">Spring</span>
                </h1>
              </div>
              <p className="mt-2 text-xs leading-6 text-gray-400">Connected</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, statIdx) => (
              <div
                key={stat.name}
                className={classNames(
                  statIdx % 2 === 1
                    ? "sm:border-l"
                    : statIdx === 2
                    ? "lg:border-l"
                    : "",
                  "border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8"
                )}
              >
                <p className="text-sm font-medium leading-6 text-gray-400">
                  {stat.name}
                </p>
                <p className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-4xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </span>
                  {stat.unit ? (
                    <span className="text-sm text-gray-400">{stat.unit}</span>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </header>

        {/* List */}
        <div className="border-t border-white/10 pt-11">
          <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">
            Latest activity
          </h2>
          <table className="mt-6 w-full whitespace-nowrap text-left">
            <colgroup>
              <col className="w-full sm:w-2/12" />
              <col className="lg:w-1/12" />
              <col className="lg:w-1/12" />
              <col className="lg:w-1/12" />
              <col className="lg:w-1/12" />
            </colgroup>
            <thead className="border-b border-white/10 text-sm leading-6 text-white">
              <tr>
                <th
                  scope="col"
                  className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
                >
                  User
                </th>
                <th
                  scope="col"
                  className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
                >
                  Date of birth
                </th>
                <th
                  scope="col"
                  className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
                >
                  Phone number
                </th>
                <th
                  scope="col"
                  className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
                >
                  Address
                </th>
              </tr>
            </thead>
            {person && person.length && (
              <tbody className="divide-y divide-white/5">
                {person.map((item) => (
                  <tr key={item.email}>
                    <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                      <div className="flex items-center gap-x-4">
                        <div className="truncate text-sm font-medium leading-6 text-white">
                          {item.name}
                        </div>
                      </div>
                    </td>
                    <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                      {item.email}
                    </td>
                    <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                      {item.age}
                    </td>
                    <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                      {item.role}
                    </td>
                    <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                      {item.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </main>
    </>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";

const statuses = {
  Completed: "text-green-400 bg-green-400/10",
  Error: "text-rose-400 bg-rose-400/10",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Overview({
  searchQuery,
}) {
  const [person, setPerson] = useState(null);
  const [connectTime, setConnectTime] = useState(null);
  const [serverStatus, setServerStatus] = useState("success");

  const countUsers = (persons) =>
    persons.filter((item) => item.role === "ROLE_USER").length;
  const countAdmins = (persons) =>
    persons.filter((item) => item.role === "ROLE_ADMIN").length;

  const stats = [
    {
      name: "Number of users",
      value: person ? countUsers(person).toString() : "0",
    },
    {
      name: "Number of admins",
      value: person ? countAdmins(person).toString() : "0",
    },
    {
      name: "Connect time",
      value: connectTime !== null ? connectTime : "0",
      unit: "seconds",
    },
    { name: "API", value: "api/v1/person" },
  ];

  const filteredPersons = person
    ? person.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.surname.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const startTime = performance.now();

        const res = await axios.get(
          import.meta.env.VITE_REACT_APP_API + "/person",
          {
            auth: {
              username: import.meta.env.VITE_REACT_APP_USERNAME,
              password: import.meta.env.VITE_REACT_APP_PASSWORD,
            },
          }
        );

        const endTime = performance.now();
        const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
        setPerson(res.data);
        setConnectTime(timeTaken);
        setServerStatus("success");
      } catch (error) {
        console.error("Error fetching persons data:", error);
        setServerStatus("error");
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
                <div
                  className={`flex-none rounded-full ${
                    serverStatus === "error"
                      ? "bg-red-400/10 p-1 text-red-400"
                      : "bg-green-400/10 p-1 text-green-400"
                  }`}
                >
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
            User Table
          </h2>
          <table className="mt-6 w-full whitespace-nowrap text-left">
            <colgroup>
              <col className="lg:w-1/12" />
              <col className="lg:w-1/12" />
              <col className="lg:w-1/12" />
              <col className="lg:w-1/12" />
              <col className="lg:w-1/12" />
            </colgroup>
            <thead className="border-b border-white/10 text-sm leading-6 text-white">
              <tr>
                <th
                  scope="col"
                  className="hidden py-2 pl-6 pr-8 font-semibold md:table-cell lg:pr-20"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
                >
                  Surname
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
                  Gender
                </th>
              </tr>
            </thead>
            {filteredPersons.length > 0 && (
              <tbody className="divide-y divide-white/5">
                {person &&
                  person.length &&
                  filteredPersons.map((item) => (
                    <tr key={item.email}>
                      <td className="hidden py-4 pl-6 pr-8 text-sm leading-6 text-gray-200 md:table-cell lg:pr-20">
                        {item.role}
                      </td>
                      <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-200 md:table-cell lg:pr-20">
                        {item.name}
                      </td>
                      <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-200 md:table-cell lg:pr-20">
                        {item.surname}
                      </td>
                      <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-200 md:table-cell lg:pr-20">
                        {item.email}
                      </td>
                      <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-200 md:table-cell lg:pr-20">
                        {item.age}
                      </td>
                      <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-200 md:table-cell lg:pr-20">
                        {item.gender}
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

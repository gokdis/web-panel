import axios from "axios";
import { useEffect, useState } from "react";

const statuses = {
  Completed: "text-green-400 bg-green-400/10",
  Error: "text-rose-400 bg-rose-400/10",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Beacons({ searchQuery }) {
  const [beacon, setBeacon] = useState(null);
  const [connectTime, setConnectTime] = useState(null);
  const [serverStatus, setServerStatus] = useState("success");

  const stats = [
    {
      name: "Number of beacons",
      value: beacon ? beacon.length.toString() : "0",
    },
    { name: "RSSI at 1 meter", value: "-65", unit: "db" },
    {
      name: "Connect time",
      value: connectTime !== null ? connectTime : "0",
      unit: "seconds",
    },
    { name: "API", value: "api/v1/beacon" },
  ];

  // TODO: Add id filtering
  const filteredBeacons = beacon
    ? beacon.filter((item) =>
        item.mac.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    const fetchBeacon = async () => {
      try {
        const startTime = performance.now();

        const res = await axios.get(
          import.meta.env.VITE_REACT_APP_API + "/beacon",
          {
            auth: {
              username: import.meta.env.VITE_REACT_APP_USERNAME,
              password: import.meta.env.VITE_REACT_APP_PASSWORD,
            },
          }
        );

        const endTime = performance.now();
        const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
        setBeacon(res.data);
        setConnectTime(timeTaken);
        setServerStatus("success");
      } catch (error) {
        console.error("Error fetching beacons data:", error);
        setServerStatus("error");
      }
    };

    fetchBeacon();
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

        {/* Table */}
        <div className="">
          <div className="mx-auto ">
            <div className=" py-10">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-white">
                      Users
                    </h1>
                    <p className="mt-2 text-sm text-gray-300">
                      A list of all the users including their role, name, email
                      and age.
                    </p>
                  </div>
                  <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-none">
                    <button
                      type="button"
                      className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Add beacon
                    </button>
                  </div>
                  <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-none">
                    <button
                      type="button"
                      className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Delete beacon
                    </button>
                  </div>
                </div>
                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                            >
                              Mac
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                            >
                              Id
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                            >
                              X
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                            >
                              Y
                            </th>
                            <th
                              scope="col"
                              className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                            >
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        {beacon && beacon.length && (
                          <tbody className="divide-y divide-gray-800">
                            {filteredBeacons.map((beacon) => (
                              <tr key={beacon.mac}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                  {beacon.mac}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                  {beacon.id}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                  {beacon.x}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                  {beacon.y}
                                </td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                  <a
                                    href="#"
                                    className="text-indigo-400 hover:text-indigo-300"
                                  >
                                    Edit
                                    <span className="sr-only">
                                      , {beacon.mac}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        )}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

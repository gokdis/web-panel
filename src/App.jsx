import { Link, Router } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Cog6ToothIcon,
  XMarkIcon,
  CircleStackIcon,
  ChartPieIcon,
  WifiIcon,
  ChartBarIcon,
  PencilIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import Users from "./Users/Users";
import Charts from "./Charts";
import Beacons from "./Beacons/Beacons";
import Search from "./Search";
import Metrics from "./Metrics";
import Draw from "./Draw";
import Products from "./Products/Products";

const navigation = [
  {
    name: "Users",
    href: "#",
    current: true,
    icon: CircleStackIcon,
    component: "Users",
  },
  {
    name: "Beacons",
    href: "#",
    current: false,
    icon: WifiIcon,
    component: "Beacons",
  },
  {
    name: "Products",
    href: "#",
    current: false,
    icon: ArchiveBoxIcon,
    component: "Products",
  },
  {
    name: "Charts",
    href: "#",
    current: false,
    icon: ChartPieIcon,
    component: "Charts",
  },
  {
    name: "Metrics",
    href: "#",
    current: false,
    icon: ChartBarIcon,
    component: "Metrics",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Users");
  const [searchQuery, setSearchQuery] = useState("");

  const handleNavigationClick = (componentName) => {
    setActiveComponent(componentName);
    setSidebarOpen(false);
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 xl:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img className="h-8 w-auto" src="" alt="Logo" />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li
                                key={item.name}
                                onClick={() =>
                                  handleNavigationClick(item.component)
                                }
                              >
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.component === activeComponent
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                                  )}
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
          {/* Sidebar component*/}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
            <div className="flex h-16 shrink-0 items-center">
              <img className="h-8 w-auto" src="" alt="Logo" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li
                        key={item.name}
                        onClick={() => handleNavigationClick(item.component)}
                      >
                        <a
                          href={item.href}
                          className={classNames(
                            item.component === activeComponent
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                    <li key={"Draw"}>
                      <a
                        href={"/draw.html"}
                        className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      >
                        <PencilIcon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        Draw
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="xl:pl-72">
          <Search
            setSearchQuery={setSearchQuery}
            setSidebarOpen={setSidebarOpen}
          />
          <div className="">
            {activeComponent === "Users" && <Users searchQuery={searchQuery} />}
            {activeComponent === "Beacons" && (
              <Beacons searchQuery={searchQuery} />
            )}
            {activeComponent === "Products" && (
              <Products searchQuery={searchQuery} />
            )}
            {activeComponent === "Draw" && <Draw />}
            {activeComponent === "Metrics" && <Metrics />}
            {activeComponent === "Charts" && <Charts />}
          </div>
        </div>
      </div>
    </>
  );
}

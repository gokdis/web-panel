import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export default function BeaconAddDialog({ open, setOpen, fetchBeacon }) {
  const cancelButtonRef = useRef(null);
  const [formData, setFormData] = useState({
    mac: "",
    id: "",
    x: "",
    y: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const formDataNew = {
        ...formData,
        x: parseInt(formData.x, 10),
        y: parseInt(formData.y, 10),
      };

      const jsonFormData = JSON.stringify(formDataNew);
      console.log(jsonFormData);
      const res = await axios.post(
        import.meta.env.VITE_REACT_APP_API + "/beacon",
        jsonFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          auth: {
            username: import.meta.env.VITE_REACT_APP_USERNAME,
            password: import.meta.env.VITE_REACT_APP_PASSWORD,
          },
        }
      );

      fetchBeacon();
      setOpen(false);
    } catch (error) {
      console.error("Error updating beacon", error);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                      <UserCircleIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-2 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Add beacon
                      </Dialog.Title>
                    </div>
                  </div>
                </div>

                {/* Forms */}
                <div className="ml-4 mr-4">
                  <div className="mb-2">
                    <label
                      htmlFor="mac"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mac
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="mac"
                        id="mac"
                        value={formData.mac}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="C7:10:69:07:FB:51"
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="id"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Id
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="id"
                        id="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="10000"
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="x"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      X
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="x"
                        id="x"
                        value={formData.x}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="5"
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="y"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Y
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="y"
                        id="y"
                        value={formData.y}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="5"
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    onClick={handleFormSubmit}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

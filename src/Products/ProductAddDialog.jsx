import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import ErrorAlert from "../ErrorAlert";

export default function ProductAddDialog({ open, setOpen, fetchProduct }) {
  const cancelButtonRef = useRef(null);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    section: "",
    price: "",
  });
  const [emptyError, setEmptyError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  let axiosConfig = {};

  if (import.meta.env.MODE !== "production") {
    axiosConfig = {
      auth: {
        username: import.meta.env.VITE_REACT_APP_USERNAME,
        password: import.meta.env.VITE_REACT_APP_PASSWORD,
      },
    };
  }

  const handleFormSubmit = async () => {
    const isEmptyField = Object.values(formData).some((value) => value === "");

    if (isEmptyField) {
      setEmptyError(true);
    } else {
      setEmptyError(false);
      try {
        const formDataNew = {
          ...formData,
        };

        const jsonFormData = JSON.stringify(formDataNew);
        const res = await axios.post(
          import.meta.env.VITE_REACT_APP_API + "/product",
          jsonFormData,
          {
            headers: {
              "Content-Type": "application/json",
            },
            axiosConfig,
          },
        );

        fetchProduct();
        setOpen(false);
      } catch (error) {
        console.error("Error updating product", error);
      }
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {
          setOpen(false);
          setEmptyError(false);
        }}
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
                      <ArchiveBoxIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-2 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Add product
                      </Dialog.Title>
                    </div>
                  </div>
                </div>

                {/* Forms */}
                <div className="ml-4 mr-4">
                  <div className="mb-2">
                    <label
                      htmlFor="id"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ID
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="id"
                        id="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="1"
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Cereal"
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="section"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Sectiton
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="section"
                        id="section"
                        value={formData.section}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Breakfast"
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Price
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="5.99"
                      />
                    </div>
                  </div>
                </div>

                {emptyError && (
                  <ErrorAlert
                    errorHeader={"There was an error with your submission"}
                    errorText={"There is an empty field."}
                  />
                )}

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
                    onClick={() => {
                      setOpen(false);
                      setEmptyError(false);
                    }}
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

import ml1 from "./assets/ml1.png";
import ml2 from "./assets/ml2.png";
import ml3 from "./assets/ml3.png";
import ml4 from "./assets/ml4.png";
import ml5 from "./assets/ml5.png";
import ml6 from "./assets/ml6.png";
import ml7 from "./assets/ml7.png";

import Metric from "./Metric";

const files = [
  {
    title: "Number of unique orders / Number of products added to cart",
    size: "Purchasing behavior",
    source: ml1,
  },
  {
    title: "Number of Reorders / Most ordered Products",
    size: "Most reordered items",
    source: ml2,
  },
  {
    title: "Number of Products / Reordered",
    size: "Reordered ratio",
    source: ml3,
  },
  {
    title: "Principle component analysis",
    size: "PCA Graph",
    source: ml4,
  },
  {
    title: "Cluster distribution",
    size: "Pie chart",
    source: ml5,
  },
  {
    title: "Average spending on each product for each cluster",
    size: "Grouped bar chart",
    source: ml6,
  },
  {
    title: "Top 5 items purchased after fresh pasta",
    size: "Bar chart",
    source: ml7,
  },
];

const reorder = [
  {
    id: "24",
    name: "fresh fruits",
    department: "produce",
    count: 226039,
  },
  {
    id: "83",
    name: "fresh vegetables",
    department: "produce",
    count: 212611,
  },
  {
    id: "123",
    name: "packaged vegetables fruits",
    department: "produce",
    count: 109596,
  },
  {
    id: "120",
    name: "yogurt",
    department: "dairy eggs",
    count: 90751,
  },
  {
    id: "21",
    name: "packaged cheese",
    department: "dairy eggs",
    count: 61502,
  },
  {
    id: "84",
    name: "milk",
    department: "dairy eggs",
    count: 55150,
  },
  {
    id: "115",
    name: "water seltzer sparkling water",
    department: "beverages",
    count: 52564,
  },
  {
    id: "107",
    name: "chips pretzels",
    department: "snacks",
    count: 45306,
  },
  {
    id: "91",
    name: "soy lactosefree",
    department: "dairy eggs",
    count: 39389,
  },
  {
    id: "112",
    name: "bread",
    department: "bakery",
    count: 36381,
  },
  {
    id: "31",
    name: "refrigerated",
    department: "beverages",
    count: 35893,
  },
  {
    id: "116",
    name: "frozen produce",
    department: "frozen",
    count: 32432,
  },
  {
    id: "37",
    name: "ice cream ice",
    department: "frozen",
    count: 31323,
  },
  {
    id: "3",
    name: "energy granola bars",
    department: "snacks",
    count: 28639,
  },
  {
    id: "78",
    name: "crackers",
    department: "snacks",
    count: 28574,
  },
];

export default function Charts() {
  return (
    <>
      <div className="mx-auto max-w-8xl">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          <Metric title={"Number of orders"} variable={"200000"} unit={""} />
          <Metric title={"Number of customers"} variable={"105273"} unit={""} />
          <Metric title={"Number of products"} variable={"134"} unit={""} />
          <Metric title={"Number of departments"} variable={"21"} unit={""} />
        </div>
      </div>

      {/* Table */}
      <div className="">
        <div className="mx-auto ">
          <div className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-base font-semibold leading-6 text-white">
                    Most reordered items
                  </h1>
                  <p className="mt-2 text-sm text-gray-300">
                    A list of most reordered items.{" "}
                  </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>
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
                            Id
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            Department
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            Count
                          </th>
                          <th
                            scope="col"
                            className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                          >
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {reorder.map((reorder) => (
                          <tr key={reorder.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                              {reorder.id}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {reorder.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {reorder.department}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {reorder.count}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-6">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
        >
          {files.map((file) => (
            <li key={file.source} className="relative">
              <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img
                  src={file.source}
                  alt=""
                  className="bg-white pointer-events-none object-contain group-hover:opacity-100"
                />
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-100">
                {file.title}
              </p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500">
                {file.size}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

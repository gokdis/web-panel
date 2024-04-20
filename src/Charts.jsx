import ml1 from "./assets/ml1.png";
import ml2 from "./assets/ml2.png";
import ml3 from "./assets/ml3.png";
import ml4 from "./assets/ml4.png";

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
];

export default function Charts() {
  return (
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
                className="pointer-events-none object-contain group-hover:opacity-100"
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
  );
}

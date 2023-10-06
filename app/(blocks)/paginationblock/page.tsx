import Link from "next/link";

export default function PaginationBlock() {
  return (
    <div className="flex flex-col">
      <div className="mt-20 mb-10">
        <ul className="flex justify-center">
          <li>
            <Link
              href="#"
              className="inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-l-lg"
            >
              Previos
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              1
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              2
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-block py-1 px-3 border border-gray-300 text-blue-600 hover:bg-blue-100"
            >
              3
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              4
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              5
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="inline-block py-1 px-3 border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg"
            >
              Next
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

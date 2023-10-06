import Link from "next/link"

export default function ButtonBlock() {

    return (
      <div className="flex flex-col">
 <button className="py-1 px-3 mb-8 w-60 rounded-full border-2 border-gray-700 text-gray-800 dark:border-gray-100
        dark:text-gray-100 focus:outline-none focus:ring-offset-green-300 hover:text-green-700">
      Click me, please
    </button>

     <button className="py-2 px-4 bg-green-600 text-white rounded-b w-60 hover:bg-indigo-800">
       Subscribe
     </button>
      </div>
    )
    }

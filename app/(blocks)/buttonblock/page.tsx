import Link from "next/link"

export default function ButtonBlock() {

    return (
      <div className="flex flex-col">
 <button className="py-1 px-3 mb-8 w-60 rounded-full border-2 border-gray-300 text-gray-800
 hover:bg-green-800 hover:text-gray-100 focus:outline-none focus:ring-offset-green-300 ">
      Click me, please
    </button>

     <button className="py-2 px-4 bg-green-200 text-gray-700 rounded-b w-60 hover:bg-green-800 hover:text-gray-100">
       Subscribe
     </button>
      </div>
    )
    }

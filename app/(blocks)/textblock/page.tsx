import Link from "next/link"

export default function TextBlock() {
    return (
      <div className="container mx-auto">

{/* <label htmlFor="editor" className="block mb-2 text-sm font-medium text-gray-500
dark:text-white"></label>
<textarea contentEditable id="editor" rows={7}
className="block p-2.5 w-full text-sm text-g bg-gray-50 rounded-lg border
border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
dark:focus:ring-blue-500 dark:focus:border-blue-500"
placeholder="Write here...">
</textarea>
        <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              </span>
          </label> */}

          <section className="px-8 mb-10">
            <Link href='#'>
            </Link>
            <div className="flex">
              <div className="">
                <h3 className="mt-3 mb-2 text-gray-800 dark:text-gray-100 font-bold text-2xl">Lorem Ipsum </h3>
                  <p className="text-gray-800 dark:text-gray-100">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quos iure
                    atque est, at repellat voluptates quibusdam rem labore modi obcaecati dolorem
                    fugit eveniet! Officia quia odio quibusdam placeat hic! Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Debitis accusantium similique repellendus
                    magni odit facere unde tenetur, reiciendis velit aliquid sapiente facilis
                    fugiat numquam obcaecati temporibus maiores nemo commodi. Corporis.
                  </p>
              </div>
            </div>
          </section>
    </div>
  )
}

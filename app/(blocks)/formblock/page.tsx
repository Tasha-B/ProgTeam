export default function FormBlock() {

    return (
<form>
  <div className="space-y-12">
    <div className="border-b border-gray-900/10 dark:border-gray-100 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-800  dark:text-gray-100">
        Personal Information</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-100">
        Use a permanent address where you can receive mail</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-800
          dark:text-gray-100">First name</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md
            border-0 py-1.5 text-gray-800 dark:border-gray-100 dark:text-gray-100 shadow-sm ring-1 ring-inset
            ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-800 dark:border-gray-100
        dark:text-gray-100">Last name</label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md
            border-0 py-1.5 text-gray-800 dark:border-gray-100 dark:text-gray-100 shadow-sm ring-1 ring-inset
            ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        {/* <input placeholder="Phone" name="userphone" type="tel" className="block text-sm font-medium leading-6 text-gray-800
        dark:text-gray-100 rounded-md border-0 py-1.5 dark:border-gray-100 "/> */}

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-800 dark:text-gray-100">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5
            text-gray-800 dark:border-gray-100 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-800 dark:text-gray-100">Country</label>
          <div className="mt-2">
            <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5
            text-gray-800 dark:border-gray-100 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600
            sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Russia</option>
              <option>Türkiye</option>
              <option>Australia</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-800 dark:text-gray-100">Street address</label>
          <div className="mt-2">
            <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full
            rounded-md border-0 py-1.5 text-gray-800 dark:border-gray-100
            dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
            focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-800 dark:text-gray-100">City</label>
          <div className="mt-2">
            <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5
            text-gray-800 dark:border-gray-100
            dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
            focus:ring-green-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-800 dark:text-gray-100">State / Province</label>
          <div className="mt-2">
            <input type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0
            py-1.5 text-gray-800 dark:border-gray-100
            dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
            focus:ring-green-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-800 dark:text-gray-100">ZIP / Postal code</label>
          <div className="mt-2">
            <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0
            py-1.5 text-gray-800 dark:border-gray-100
            dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
            focus:ring-green-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" className="text-sm font-semibold leading-6 text-gray-800 dark:text-gray-100">Cancel</button>
    <button type="submit" className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Save</button>
  </div>
</form>
    )
}

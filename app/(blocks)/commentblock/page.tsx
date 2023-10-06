
export default function CommentBlock() {

    return (
<form>
  <div className="space-y-12">
    <div className="border-b border-gray-900/10 pb-12">
      <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-100">
        This information will be displayed publicly so be careful what you share.</p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-800
          dark:text-gray-100">Username</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2
            focus-within:ring-inset focus-within:ring-green-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-600 dark:text-gray-100
              sm:text-sm">progteam.com/</span>
              <input type="text" name="username" id="username" autoComplete="username" className="block flex-1
              border-0 bg-transparent py-1.5 pl-1 text-gray-800 dark:text-gray-100 placeholder:text-gray-400
              focus:ring-0 sm:text-sm sm:leading-6" placeholder="ivanov" />
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-800 dark:text-gray-100">
            Comment</label>
          <div className="mt-2">
            <textarea id="about" name="about" rows={5} className="block w-5/12 rounded-md border-0 py-1.5
            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
            focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
        </div>
      </div>
    </div>
  </div>
</form>
)
}

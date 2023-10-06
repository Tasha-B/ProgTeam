export default function ContactsBlock() {

    return (
    <div className="max-w-md h-auto">
        <h2 className="text-3xl">Contact me</h2>
        <div className=" flex flex-col mt-10 mb-8">
            <input placeholder="E-mail" name="useremail" type="email" className="mb-2 pl-3 max-w-md h-14 border-2 border-gray-300
            text-gray-500 dark:border-gray-100 dark:text-gray-700"/>
            <input placeholder="Phone" name="userphone" type="tel" className="mb-2 pl-3 max-w-md h-14 border-2 border-gray-300
            text-gray-500 dark:border-gray-100 dark:text-gray-700"/>
            <textarea placeholder="Message" id="message" name="message" rows={6} cols={30}
            className="mb-2 pl-3 max-w-md h-14 border-2 border-gray-300 text-gray-500 dark:border-gray-100 dark:text-gray-700">
            </textarea>
        </div>
        <button className=""></button>
        <button className="py-1 px-3 rounded-full border-2 border-gray-300 text-gray-700 dark:border-gray-400
        dark:text-gray-700 focus:outline-none focus:ring-greent-300">
      Send message
    </button>
    </div>
    )
}

export default function ContactsBlock() {

    return (
    <div className="max-w-md h-auto">
        <h2 className="text-4xl ">Contact me</h2>
        <div className=" flex flex-col mt-10 mb-8">
            <input placeholder="E-mail" name="useremail" type="email" className="max-w-md h-14 border-2 border-gray-700
            text-gray-800 dark:border-gray-100 dark:text-gray-100"/>
            <input placeholder="Phone" name="userphone" type="tel" className="max-w-md h-14 border-2 border-gray-700
            text-gray-800 dark:border-gray-100 dark:text-gray-100"/>
            <textarea placeholder="Message" id="message" name="message" rows={2} cols={30}
            className="max-w-md h-14 border-2 border-gray-700 text-gray-800 dark:border-gray-100 dark:text-gray-100">
            </textarea>
        </div>
        <button className=""></button>
        <button className="py-1 px-3 rounded-full border-2 border-gray-700 text-gray-800 dark:border-gray-100
        dark:text-gray-100 focus:outline-none focus:ring-violet-300">
      Send message
    </button>
    </div>
    )
}

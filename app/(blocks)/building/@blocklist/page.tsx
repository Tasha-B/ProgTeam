import Link from 'next/link';

export default function BlockList() {
   return (
    <div>
<ul className='flex flex-col'>
      <li><Link href="/textblock" className="hover:underline">Text</Link></li>
      <li><Link href="/imageblock" className="hover:underline">Image</Link></li>
      <li><Link href="/contactsblock" className="hover:underline">Contacts</Link></li>
      <li><Link href="/buttonblock" className="hover:underline">Button</Link></li>
      <li><Link href="/tableblock" className="hover:underline">Table</Link></li>
      <li><Link href="/socialblock" className="hover:underline">Social</Link></li>
      <li><Link href="/headingblock" className="hover:underline">Heading</Link></li>
      <li><Link href="/commentblock" className="hover:underline">Comment</Link></li>
      <li><Link href="/formblock" className="hover:underline">Form</Link></li>
      <li><Link href="/searchblock" className="hover:underline">Search</Link></li>
      <li><Link href="/paginationblock" className="hover:underline">Pagination</Link></li>
      <li><Link href="/uploadblock" className="hover:underline">Upload</Link></li>
    </ul>
    </div>
   )
   }

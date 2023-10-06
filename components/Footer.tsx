import Link from "next/link";

const Footer = () => {
   return (
    <footer className="container mx-auto">
<div className=' flex justify-between'>
            <span className=''>© ProgTeam 2023</span>
            <div className=''>
            <Link href="#" className="">Github</Link>
            </div>
          </div>
    </footer>
   )
}

export {Footer}

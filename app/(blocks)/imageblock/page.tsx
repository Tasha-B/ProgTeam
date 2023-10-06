import Image from "next/image";
import Link from "next/link";

export default function ImageBlock() {

    return (
      // <Link href='/' className="w-full lg:w-2/3 mb-4 relative rounded inline-block overflow-hidden">
      //   </Link>
           <Image className="mx-auto object-cover"
      src="/lash.png"
      width={500}
      height={500}
      alt="Eagle"
    />

    )
}

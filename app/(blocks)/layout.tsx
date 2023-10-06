// import '../globals.css'
import Link from "next/link";
import { Header } from '@/components/Header';
import { Footer } from "@/components/Footer";

export default function BlocksLayout({
    children,
}: {
  children: React.ReactNode
}) {
  return (
<div>
<Header />
<section className="flex flex-col justify-between flex-wrap p-10 max-w-full h-auto text-left pt-16">
{children}
</section>
 <Footer />
</div>
 )
  }

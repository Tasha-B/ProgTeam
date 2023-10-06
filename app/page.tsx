import Image from 'next/image'
import Link from 'next/link'
import React, { Component } from 'react'

export default function Home() {
  return (
<div className='w-full h-5/6 absolute right-0 left-0 top-6 m-auto flex justify-center'>
    <Link href="/building" className="text-5xl ">+</Link>
</div>
  )
}

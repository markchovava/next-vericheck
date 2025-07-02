import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

export default function page() {
  return (
    <>
    <section className='min-h-screen bg-gray-900 text-gray-300 pb-[5rem]'>
        <ul className='w-[94%] mx-auto flex justify-start items-center gap-2 py-1 mb-[4rem] border-b border-gray-600'>
            <Link href="/">
                <li>Home</li>
            </Link>
            <li><FaAngleRight /></li>
            <Link href="/explore">
                <li className='font-semibold'>Explore</li>
            </Link>
        </ul>
        <div className="flex items-center justify-center py-[5rem]">
            <p className='text-4xl font-light'>Coming soon.</p>
        </div>
    </section>
    </>
  )
}

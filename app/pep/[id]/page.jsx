import Link from 'next/link';
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { censoredPeopleViewAction } from '../../_actions/CensoredPeopleActions';
import PepUserView from './_components/PepUserView';



export default async function page({ params: {id} }) {
  const [data, ] = await Promise.all([censoredPeopleViewAction( parseInt(id) ), ])

  return (
    <>

     <section className='min-h-screen bg-gray-900 text-gray-400 pb-[5rem]'>

      <ul className='w-[94%] mx-auto flex justify-start items-center gap-2 py-1 mb-[4rem] border-b border-gray-600'>
        <Link href="/">
          <li>Home</li>
        </Link>
        <li><FaAngleRight /></li>
        <Link href="/pep">
          <li>PEPs</li>
        </Link>
        <li><FaAngleRight /></li>
        <Link href={`/pep/${id}`}>
          <li className='font-semibold'>{data?.data?.person?.name}</li>
        </Link>
      </ul>


      <PepUserView id={id} dbData={data} />

      
     </section>
    </>
  )
}

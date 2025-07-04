import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import SanctionUserView from './_components/SanctionUserView';
import { UserData } from '../../_data/UserData';
import { censoredPeopleViewAction } from '../../_actions/CensoredPeopleActions';



export default function page({ params: {id} }) {
  //const data = UserData.find((i) => i.id === parseInt(id))
  const [data, ] = Promise.all([censoredPeopleViewAction( parseInt(id) ), ])

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
        <Link href={`/pep/${data.id}`}>
          <li className='font-semibold'>{data.name}</li>
        </Link>
      </ul>


      <SanctionUserView id={id} dbData={data} />

      
     </section>
    </>
  )
}

import Link from 'next/link';
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import SanctionUserView from './_components/SanctionUserView';
import { unConsolidatedSanctionViewAction } from '../../_actions/UNConsolidatedSanctionsEntriesAction';



export default async function page({ params: {id} }) {
  const [data, ] = await Promise.all([unConsolidatedSanctionViewAction( parseInt(id) ), ])


console.log(data);
  return (
    <>

     <section className='min-h-screen bg-gray-900 text-gray-400 pb-[5rem]'>

      <ul className='w-[94%] mx-auto flex justify-start items-center gap-2 py-1 mb-[4rem] border-b border-gray-600'>
        <Link href="/">
          <li>Home</li>
        </Link>
        <li><FaAngleRight /></li>
        <Link href="/sanctions">
          <li>Sanctions</li>
        </Link>
        <li><FaAngleRight /></li>
        <Link href={`/sanctions/${id}`}>
        {data?.data?.sanction?.name_part_1 && data?.data?.sanction?.name_part_2 &&
          <li className='font-semibold'>
            {data?.data?.sanction?.name_part_1 + ' ' + data?.data?.sanction?.name_part_2 || 'User'}
          </li>
        }
        </Link>
      </ul>
   

      <SanctionUserView id={id} dbData={data} />

      
     </section>
    </>
  )
}

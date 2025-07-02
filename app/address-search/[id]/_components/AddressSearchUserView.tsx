import Image from 'next/image'
import React from 'react'

export default function AddressSearchUserView({ id, dbData}) {
  
  return (
    <>
    <h2 className='text-center text-[3rem] font-bold text-gray-300 mb-4'>
        User Information
      </h2>
    
      <div className='max-w-4xl p-6 mx-auto rounded-2xl bg-gray-800 flex items-start justify-start mb-6'>
        <div className='p-3 flex-2 flex flex-col items-center justify-start'>
          <div className='w-[60%] relative aspect-[1/1] rounded-full overflow-hidden mb-3'>
            <Image 
              src={`/assets/img/no-img.jpg`} 
              fill
              alt="No Image" 
              className='object-cover'
            />
          </div>
          <p className='font-bold text-4xl text-gray-300 mb-6'>
            {dbData.name && dbData.name}
          </p>
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>SANCTION</p>
              <p className='text-lg text-red-500'>Under Sanctions</p>
          </div>
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>PEP</p>
              <p className='text-lg text-green-500'>Under PEP</p>
          </div>

        </div>

        <div className='flex-5 px-4'>

          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>LIVE IN</p>
              <p className='text-lg text-gray-300'>562 Hill Top Dr, Niota, TN  </p>
          </div>
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>EMAIL</p>
              <p className='text-lg text-gray-300'>james@gmail.com </p>
          </div>
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Phone number(s):</p>
              <p className='text-lg text-gray-300'>(423) 568-2540  </p>
          </div>
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>DECEASE / ALIVE(s):</p>
              <p className='text-lg text-gray-300'>Alive </p>
          </div>
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Date of Birth:</p>
              <p className='text-lg text-gray-300'>23 December 1981 </p>
          </div>
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Gender:</p>
              <p className='text-lg text-gray-300'>Male </p>
          </div>
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Nationality:</p>
              <p className='text-lg text-gray-300'>Zimbabwean</p>
          </div>
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>City:</p>
              <p className='text-lg text-gray-300'>Harare</p>
          </div>
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Country:</p>
              <p className='text-lg text-gray-300'>Zimbabwe</p>
          </div>


        </div>

      </div>

      <div className='max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gray-800'>
        <div className='w-[100%] h-[100%] relative aspect-[4/1] overflow-hidden'>
          <Image 
            src={`/assets/img/map.png`} 
            fill
            alt="No Image" 
            className='object-cover'
          />
        </div>
      </div>

    </>
  )
}

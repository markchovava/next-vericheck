import Image from 'next/image'
import React from 'react'

export default function SanctionUserView({ id, dbData }) {
 const sanction = dbData?.data?.sanction
  
  // Add safety checks for dbData
  if (!dbData) {
    return (
      <div className='max-w-4xl mx-auto text-center'>
        <p className='text-xl text-red-500'>No data available</p>
      </div>
    )
  }


  return (
    <>
      <h2 className='text-center text-[3rem] font-bold text-gray-300 mb-4'>
        User Information
      </h2>

      <div className='max-w-4xl p-6 mx-auto rounded-2xl bg-gray-800 flex items-start justify-start mb-6'>
        {/* LEFT */}
        <div className='p-3 flex-2 flex flex-col items-center justify-start'>
          <div className='w-[60%] relative aspect-[1/1] rounded-full overflow-hidden mb-3'>
            <Image
              src={`/assets/img/no-img.jpg`}
              fill
              alt="No Image"
              className='object-cover'
            />
          </div>
          {sanction?.name_part_1 && sanction?.name_part_2 &&
          <p className='font-bold text-4xl text-gray-300 mb-6'>
            {sanction?.name_part_1 + ' ' + sanction?.name_part_2 || 'Not Added'}
          </p>
          }
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>SANCTION</p>
            <p className='text-lg text-red-500'>
              {'Under Sanctions'}
            </p>
          </div>
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>PEP</p>
            <p className='text-lg text-green-500'>
              {'Under PEP'}
            </p>
          </div>
        </div>
        {/* RIGHT */}
        <div className='flex-5 px-4'>
          {sanction?.status &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>STATUS:</p>
              <p className='text-lg text-gray-300'>{sanction?.status}</p>
            </div>
          }

          {/* New Fields */}
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>EXTERNAL ID</p>
            <p className='text-lg text-gray-300'>{sanction?.external_id || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>NAME PART 1</p>
            <p className='text-lg text-gray-300'>{sanction?.name_part_1 || 'Not Available'}</p>
          </div>

          {sanction?.name_part_2 &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>NAME PART 2</p>
              <p className='text-lg text-gray-300'>{sanction?.name_part_2 || 'Not Available'}</p>
            </div>
          }

          {sanction?.name_part_3 &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>NAME PART 3</p>
            <p className='text-lg text-gray-300'>{sanction?.name_part_3 || 'Not Available'}</p>
          </div>
          }

          {sanction?.name_part_4 &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>NAME PART 4</p>
            <p className='text-lg text-gray-300'>{sanction?.name_part_4 || 'Not Available'}</p>
          </div>
          }

          {sanction?.name_of_original_script &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>ORIGINAL SCRIPT NAME</p>
            <p className='text-lg text-gray-300'>{sanction?.name_of_original_script || 'Not Available'}</p>
          </div>
          }

          {sanction?.title &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>TITLE</p>
            <p className='text-lg text-gray-300'>{sanction?.title || 'Not Available'}</p>
          </div>
          }

          {sanction?.designation &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>DESIGNATION</p>
            <p className='text-lg text-gray-300'>{sanction?.designation || 'Not Available'}</p>
          </div>
          }

          {sanction?.date_of_birth &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>DATE OF BIRTH</p>
            <p className='text-lg text-gray-300'>{sanction?.date_of_birth || 'Not Available'}</p>
          </div>
          }

          {sanction?.place_of_birth &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>PLACE OF BIRTH</p>
            <p className='text-lg text-gray-300'>{sanction?.place_of_birth || 'Not Available'}</p>
          </div>
          }

          {sanction?.good_quality_aka &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>GOOD QUALITY AKA</p>
            <p className='text-lg text-gray-300'>{sanction?.good_quality_aka || 'Not Available'}</p>
          </div>
          }

          {sanction?.low_quality_aka &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>LOW QUALITY AKA</p>
            <p className='text-lg text-gray-300'>{sanction?.low_quality_aka || 'Not Available'}</p>
          </div>
          }

          {sanction?.nationality &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>NATIONALITY</p>
            <p className='text-lg text-gray-300'>{sanction?.nationality || 'Not Available'}</p>
          </div>
          }

          {sanction?.passport_no &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>PASSPORT NO</p>
            <p className='text-lg text-gray-300'>{sanction?.passport_no || 'Not Available'}</p>
          </div>
          }

          {sanction?.national_identification_no &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>NATIONAL IDENTIFICATION NO</p>
            <p className='text-lg text-gray-300'>{sanction?.national_identification_no || 'Not Available'}</p>
          </div>
          }

          {sanction?.address &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>ADDRESS</p>
            <p className='text-lg text-gray-300'>{sanction?.address || 'Not Available'}</p>
          </div>
          }

          {sanction?.listed_on &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>LISTED ON</p>
            <p className='text-lg text-gray-300'>{sanction?.listed_on || 'Not Available'}</p>
          </div>
          }

          {sanction?.amended_on &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>AMENDED ON</p>
            <p className='text-lg text-gray-300'>{sanction?.amended_on || 'Not Available'}</p>
          </div>
          }

          {sanction?.other_information &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>OTHER INFORMATION</p>
            <p className='text-lg text-gray-300'>{sanction?.other_information || 'Not Available'}</p>
          </div>
          }

          {sanction?.interpol_link &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>INTERPOL LINK</p>
            <p className='text-lg text-gray-300'>{sanction?.interpol_link || 'Not Available'}</p>
          </div>
          }

          </div>
      </div>

     
      <div className='max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gray-800 mb-6'>
        <div className='w-[100%] h-[100%] relative aspect-[4/1] overflow-hidden'>
          <Image 
            src={`/assets/img/map.png`} 
            fill
            alt="Map" 
            className='object-cover'
          />
        </div>
      </div>
    </>
  )
}
import Image from 'next/image'
import React from 'react'

export default function SanctionUserView({ id, dbData }) {
 const sanction = dbData?.data?.sanction
 const external_id = dbData?.data?.external_id || []
   const name_part_1 = dbData?.data?.name_part_1 || []
   const name_part_2 = dbData?.data?.name_part_2 || []
   const name_part_3 = dbData?.data?.name_part_3 || []
   const name_part_4 = dbData?.data?.name_part_4 || []
   const name_of_original_script = dbData?.data?.name_of_original_script || []
   const title = dbData?.data?.title || []
   const designation = dbData?.data?.designation || []
   const date_of_birth = dbData?.data?.date_of_birth || []
   const place_of_birth = dbData?.data?.place_of_birth || []
   const good_quality_aka = dbData?.data?.good_quality_aka || []
   const low_quality_aka = dbData?.data?.low_quality_aka || []
   const nationality = dbData?.data?.nationality || []
   const passport_no = dbData?.data?.passport_no || []
   const national_identification_no = dbData?.data?.national_identification_no || []
   const address = dbData?.data?.address || []
   const listed_on = dbData?.data?.listed_on || []
   const amended_on = dbData?.data?.amended_on || []
   const other_information = dbData?.data?.other_information || []
   const interpol_link = dbData?.data?.interpol_link || []
  
console.log(good_quality_aka);
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
          <p className='font-bold text-4xl text-gray-300 mb-6'>
            {sanction?.name || 'Not Added'}
          </p>
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

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>NAME PART 2</p>
            <p className='text-lg text-gray-300'>{sanction?.name_part_2 || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>NAME PART 3</p>
            <p className='text-lg text-gray-300'>{sanction?.name_part_3 || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>NAME PART 4</p>
            <p className='text-lg text-gray-300'>{sanction?.name_part_4 || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>ORIGINAL SCRIPT NAME</p>
            <p className='text-lg text-gray-300'>{sanction?.name_of_original_script || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>TITLE</p>
            <p className='text-lg text-gray-300'>{sanction?.title || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>DESIGNATION</p>
            <p className='text-lg text-gray-300'>{sanction?.designation || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>DATE OF BIRTH</p>
            <p className='text-lg text-gray-300'>{sanction?.date_of_birth || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>PLACE OF BIRTH</p>
            <p className='text-lg text-gray-300'>{sanction?.place_of_birth || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>GOOD QUALITY AKA</p>
            <p className='text-lg text-gray-300'>{sanction?.good_quality_aka || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>LOW QUALITY AKA</p>
            <p className='text-lg text-gray-300'>{sanction?.low_quality_aka || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>NATIONALITY</p>
            <p className='text-lg text-gray-300'>{sanction?.nationality || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>PASSPORT NO</p>
            <p className='text-lg text-gray-300'>{sanction?.passport_no || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>NATIONAL IDENTIFICATION NO</p>
            <p className='text-lg text-gray-300'>{sanction?.national_identification_no || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>ADDRESS</p>
            <p className='text-lg text-gray-300'>{sanction?.address || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>LISTED ON</p>
            <p className='text-lg text-gray-300'>{sanction?.listed_on || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>AMENDED ON</p>
            <p className='text-lg text-gray-300'>{sanction?.amended_on || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>OTHER INFORMATION</p>
            <p className='text-lg text-gray-300'>{sanction?.other_information || 'Not Available'}</p>
          </div>

          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>INTERPOL LINK</p>
            <p className='text-lg text-gray-300'>{sanction?.interpol_link || 'Not Available'}</p>
          </div>

          {/* Existing Fields (moved below new ones for better flow in this snippet) */}
          
          {sanction?.work_address &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>WORK ADDRESS</p>
              <p className='text-lg text-gray-300'>{sanction?.work_address}</p>
            </div>
          }
          {sanction?.email &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>EMAIL</p>
              <p className='text-lg text-gray-300'>{sanction?.email}</p>
            </div>
          }
          {sanction?.mobile &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>PHONE NUMBER(S):</p>
              <p className='text-lg text-gray-300'>{sanction?.mobile}</p>
            </div>
          }
          {sanction?.home_phone &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>HOME PHONE(S):</p>
              <p className='text-lg text-gray-300'>{sanction?.home_phone}</p>
            </div>
          }
          {sanction?.work_phone &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>WORK PHONE(S):</p>
              <p className='text-lg text-gray-300'>{sanction?.work_phone}</p>
            </div>
          }
          {sanction?.dob &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Date of Birth:</p>
              <p className='text-lg text-gray-300'>{sanction?.dob}</p>
            </div>
          }
          {sanction?.marital_status &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Marital Status:</p>
              <p className='text-lg text-gray-300'>{sanction?.marital_status}</p>
            </div>
          }
          {sanction?.id_no &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>ID NUMBER:</p>
              <p className='text-lg text-gray-300'>{sanction?.id_no}</p>
            </div>
          }
          {sanction?.gender &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Gender:</p>
              <p className='text-lg text-gray-300'>{sanction?.gender}</p>
            </div>
          }
          {sanction?.education &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Education:</p>
              <p className='text-lg text-gray-300'>{sanction?.education}</p>
            </div>
          }
          {sanction?.career &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>CAREER:</p>
              <p className='text-lg text-gray-300'>{sanction?.career}</p>
            </div>
          }
          {sanction?.interest &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>INTEREST:</p>
              <p className='text-lg text-gray-300'>{sanction?.interest}</p>
            </div>
          }
          {sanction?.hobbies &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>HOBBIES:</p>
              <p className='text-lg text-gray-300'>{sanction?.hobbies}</p>
            </div>
          }
          {sanction?.children &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Children:</p>
              <p className='text-lg text-gray-300'>{sanction?.children}</p>
            </div>
          }
          {sanction?.employer &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>EMPLOYER:</p>
              <p className='text-lg text-gray-300'>{sanction?.employer}</p>
            </div>
          }
          {sanction?.educational_institutes &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Educational Institutes:</p>
              <p className='text-lg text-gray-300'>{sanction?.educational_institutes}</p>
            </div>
          }
          {sanction?.sources &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Sources:</p>
              <p className='text-lg text-gray-300'>{sanction?.sources}</p>
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
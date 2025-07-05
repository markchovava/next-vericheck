import Image from 'next/image'
import React from 'react'

export default function AddressSearchUserView({ id, dbData }) {
 const person = dbData?.data?.person
  const board = dbData?.data?.board || []
  const position_held = dbData?.data?.position_held || []
  const judgement = dbData?.data?.judgement || []
  const property = dbData?.data?.property || []
  const company = dbData?.data?.company || []
  const dependencies = dbData?.data?.dependecies || []
  

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
            {person?.name || 'Not Added'}
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
          {person?.status &&
           <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>STATUS:</p>
              <p className='text-lg text-gray-300'>{person?.status}</p>
          </div>
          }
          {person?.home_address &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>LIVE IN</p>
              <p className='text-lg text-gray-300'>{person?.home_address}</p>
          </div>
          }
          {person?.work_address &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>WORK ADDRESS</p>
              <p className='text-lg text-gray-300'>{person?.work_address}</p>
          </div>
          }
          {person?.email &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>EMAIL</p>
              <p className='text-lg text-gray-300'>{person?.email}</p>
          </div>
          }
          {person?.mobile &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>PHONE NUMBER(S):</p>
              <p className='text-lg text-gray-300'>{person?.mobile}</p>
          </div>
          }
          {person?.home_phone &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>HOME PHONE(S):</p>
              <p className='text-lg text-gray-300'>{person?.home_phone}</p>
          </div>
          }
          {person?.work_phone &&
           <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>WORK PHONE(S):</p>
              <p className='text-lg text-gray-300'>{person?.work_phone}</p>
          </div>
          }
          {person?.dob &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Date of Birth:</p>
              <p className='text-lg text-gray-300'>{person?.dob}</p>
          </div>
          }
          {person?.marital_status &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Marital Status:</p>
              <p className='text-lg text-gray-300'>{person?.marital_status}</p>
          </div>
          }
          {person?.id_no &&
           <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>ID NUMBER:</p>
              <p className='text-lg text-gray-300'>{person?.id_no}</p>
          </div>
          }
          {person?.gender &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Gender:</p>
              <p className='text-lg text-gray-300'>{person?.gender}</p>
          </div>
          }
          {person?.education &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Education:</p>
              <p className='text-lg text-gray-300'>{person?.education}</p>
          </div>
          }
          {person?.career &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>CAREER:</p>
              <p className='text-lg text-gray-300'>{person?.career}</p>
          </div>
          }
          {person?.interest &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>INTEREST:</p>
              <p className='text-lg text-gray-300'>{person?.interest}</p>
          </div>
          }
          {person?.hobbies &&
           <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>HOBBIES:</p>
              <p className='text-lg text-gray-300'>{person?.hobbies}</p>
          </div>
          }
          {person?.children &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Children:</p>
              <p className='text-lg text-gray-300'>{person?.children}</p>
          </div>
          }
          {person?.employer &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>EMPLOYER:</p>
              <p className='text-lg text-gray-300'>{person?.employer}</p>
          </div>
          }
          {person?.educational_institutes &&
           <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Educational Institutes:</p>
              <p className='text-lg text-gray-300'>{person?.educational_institutes}</p>
          </div>
          }
          {person?.sources &&
          <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Sources:</p>
              <p className='text-lg text-gray-300'>{person?.sources}</p>
          </div>
          }

          {dependencies.length > 0 &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Dependencies:</p>
                {dependencies.map((i, key) => (
                <div key={key} className='text-lg text-gray-300 mb-2'>
                    <span>{i.spouse_name}</span>
                    <span className='ml-2 italic text-amber-300'>
                      {i.relationship && `(${i.relationship})`}
                    </span>
                </div>
                ))}
            </div>
          }


          { company.length > 0 &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Company:</p>
                { company.map((i, key) => (
                <div key={key} className='text-lg text-gray-300 mb-2'>
                    <span>{i.company}</span>
                    <span className='ml-2 italic text-amber-300'>
                      {i.status && i.status}
                    </span>
                </div>
                )) }
            </div>
          }

          { property.length > 0 &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Property:</p>
              <div className='text-lg text-gray-300'>
                {property.map((i, key) => (
                  <div key={key}>
                    <span>{i.property_name}</span>
                    <span className='ml-2 italic text-amber-300'>
                      {i.property_type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          }

          {board.length > 0 &&
            <div className='w-[100%] mb-6'>
              <p className='text-gray-400 text-sm uppercase'>Board:</p>
              <div className='text-lg text-gray-300'>
                {board.map((i, key) => (
                  <p key={key}>{i.company}</p>
                ))}
              </div>
            </div>
          }

        {position_held.length > 0 &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>Position Held:</p>
            <div className='text-lg text-gray-300'>
              {position_held.map((i, key) => (
                <p key={key}>{i.position_held}</p>
              ))}
            </div>
          </div>
        }

        {judgement.length > 0 &&
          <div className='w-[100%] mb-6'>
            <p className='text-gray-400 text-sm uppercase'>Judgement:</p>
              {judgement.map((i, key) => (
                <div key={key} className='text-lg text-gray-300'>
                  <p>
                    <span className='mr-2'>Ref:</span>
                    <span className='text-amber-300'>{i.ref}</span> 
                  </p>
                  <p>
                    <span className='mr-2'>Case No:</span>
                    <span className='text-amber-300'>{i.case_no}</span> 
                  </p>
                  <p>
                    <span className='mr-2'>Case Description:</span>
                    <span className='text-amber-300'>{i.case_description}</span> 
                  </p>
              </div>
              ))}
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
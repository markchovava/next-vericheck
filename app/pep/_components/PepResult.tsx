"use client"
import Link from 'next/link';
import React, { useState } from 'react'



export default function PepResult({ dbData }) {
    
  return (
    <>
    <section>
       
        <main className='max-w-4xl mx-auto mb-8'>

            {/* Loading State */}
            {dbData.loading && (
                <section className='flex items-center justify-center my-[3rem]'>
                    <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                        <p className='text-2xl'>Searching...</p>
                    </div>
                </section>
            )}

           {/* Error State */}
            {dbData.error && !dbData.loading && (
                <section className='flex items-center justify-center my-[3rem]'>
                    <div className="text-center">
                        <p className='text-2xl text-red-500 mb-2'>No results found</p>
                        <p className='text-gray-500'>Please try a different search term</p>
                    </div>
                </section>
            )}

            {dbData.data.length > 0 && !dbData.loading && !dbData.error &&
            <>
                <div className="mb-6">
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Found {dbData.data.length} result{dbData.data.length !== 1 ? 's' : ''}
                    </p>
                </div>

                {dbData.data.map((i, key) => (
                    <section key={key} className='p-6 bg-gray-800 text-gray-300 rounded-xl mb-6'>
                    <div className='w-[100%] flex justify-between'>   
                        <div className='text-2xl'>
                            <div className='w-[100%] mb-6 flex justify-start items-center gap-3'>
                                <p className='text-purple-400'>{i.name}</p>
                                <p className='text-gray-500'>|</p>
                                <p>Age 45 years</p>
                                <p className='text-gray-500'>|</p>
                                <p>Male</p>
                            </div>
                            <div className='w-[100%] mb-6'>
                                <p className='text-gray-400 text-sm uppercase'>LIVE IN</p>
                                <p className='text-lg'>625 Hill Top Dr, Niota, TN  </p>
                            </div>
                            <div className='w-[100%] mb-6'>
                                <p className='text-gray-400 text-sm uppercase'>Phone number(s):</p>
                                <p className='text-lg'>(423) 568-2540  </p>
                            </div>
                            <div className='w-[100%] '>
                                <p className='text-gray-400 text-sm uppercase'>May be related to:</p>
                                <p className='text-lg flex -ml-2'>
                                    <span className='mx-2'>Den Chaike</span>• 
                                    <span className='mx-2'>Tino Chaike</span>•
                                    <span className='mx-2'>Dani Chaike</span>• 
                                    <span className='mx-2'>Denise Chaike</span>
                                </p>
                            </div>
                        </div>    
                        <div>
                            <Link href={`/pep/${i.id}`}>
                                <button className='py-3 px-6 text-lg rounded-xl hover:drop-shadow-lg bg-purple-600 hover:bg-purple-700 text-white ease-in-out duration-150'>
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
                ))
                }

               {/*  <button className='w-[100%] bg-gray-600 hover:bg-gray-700 duration-150 text-gray-200 text-lg py-4 rounded-xl'>
                    Load More
                </button> */}

            </>
            }

           
            

        </main>
    </section>
    </>
  )
}

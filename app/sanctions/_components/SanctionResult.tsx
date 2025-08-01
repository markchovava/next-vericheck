"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { trimString } from '../../_utils/StringManipulation';

export default function SanctionResult({ dbData, getData }) {
    
  return (
    <>
    <section>
        <main className='max-w-4xl mx-auto mb-8'>

            {/* Loading State */}
            {dbData.loading && (
                <section className='flex items-center justify-center my-[3rem]'>
                    <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
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

            {/* Results - Add safety checks for data structure */}
            {dbData.data && Array.isArray(dbData.data) && dbData.data.length > 0 && !dbData.loading && !dbData.error &&
            <>
                {dbData?.meta?.total &&
                <div className="mb-6">
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Found {dbData.meta.total} result{dbData.meta.total !== 1 ? 's' : ''}
                    </p>
                </div>
                }

                {dbData.data.map((i, key) => (
                <section key={key} className='p-6 bg-gray-800 text-gray-300 rounded-xl mb-6'>
                    <div className='w-[100%] flex justify-between'>   
                        <div className='flex-3 text-xl'>
                            <div className='w-[100%] mb-6 flex justify-start items-center gap-3'>
                                <p className='text-primary'>{i.name_part_1 || ''} {i.name_part_2 || ''} {i.name_part_3 || ''} {i.name_part_4 || ''}</p>
                                {i.status &&
                                <>
                                    <p className='text-gray-500'>|</p>
                                    <p className='text-green-500'>{trimString(i.status, 30)}</p>
                                </>
                                }
                                {i.title &&
                                <>
                                    <p className='text-gray-500'>|</p>
                                    <p>{i.title}</p>
                                </>
                                }
                            </div>
                            {i.date_of_birth &&
                            <div className='w-[75%] mb-6'>
                                <p className='text-gray-400 text-sm uppercase'>DATE OF BIRTH</p>
                                <p className='text-lg'>{i.date_of_birth}  </p>
                            </div>
                            }
                            {i.nationality &&
                            <div className='w-[100%] mb-6'>
                                <p className='text-gray-400 text-sm uppercase'>NATIONALITY:</p>
                                <p className='text-lg'>{i.nationality}  </p>
                            </div>
                            }
                            {i.listed_on &&
                            <div className='w-[100%] mb-6'>
                                <p className='text-gray-400 text-sm uppercase'>LISTED ON:</p>
                                <p className='text-lg'>{i.listed_on}  </p>
                            </div>
                            }
                            {i.good_quality_aka &&
                            <div className='w-[100%] mb-6'>
                                <p className='text-gray-400 text-sm uppercase'>GOOD QUALITY AKA:</p>
                                <p className='text-lg'>{i.good_quality_aka}  </p>
                            </div>
                            }
                            
                        </div>    
                        <div className='flex-1 flex justify-end'>
                            <Link href={`/sanctions/${i.id}`}>
                                <button className='py-3 px-5 rounded-xl hover:drop-shadow-lg bg-primary hover:bg-primary text-white ease-in-out duration-150'>
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
                ))
                }

                {/* Fix the links check */}
                {dbData.links && dbData.links.next &&
                    <button onClick={() => getData(dbData.links.next)} className='w-[100%] bg-gray-600 hover:bg-gray-700 duration-150 text-gray-200 text-lg py-4 rounded-xl'>
                        {dbData.loadMore == false 
                        ? 'Load More' 
                        : 'Loading...'
                        } 
                    </button>
                }

            </>
            }

        
        </main>
    </section>
    </>
  )
}
"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { trimString } from '../../_utils/StringManipulation';





export default function AddressSearchResult({ dbData, getData }) {
    
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
                                <p className='text-primary'>{i.name || 'Unknown'}</p>
                                {i.status &&
                                <>
                                    <p className='text-gray-500'>|</p>
                                    <p className='text-green-500'>{trimString(i.status, 30)}</p>
                                </>
                                }
                                {i.gender &&
                                <>
                                    <p className='text-gray-500'>|</p>
                                    <p>{i.gender}</p>
                                </>
                                }
                            </div>
                            {i.home_address &&
                            <div className='w-[75%] mb-6'>
                                <p className='text-gray-400 text-sm uppercase'>LIVE IN</p>
                                <p className='text-lg'>{i.home_address}  </p>
                            </div>
                            }
                            {i.mobile &&
                            <div className='w-[100%] mb-6'>
                                <p className='text-gray-400 text-sm uppercase'>Phone number(s):</p>
                                <p className='text-lg'>{i.mobile}  </p>
                            </div>
                            }
                            {/* Show only first 6 dependencies */}
                            {i.dependencies && Array.isArray(i.dependencies) && i.dependencies.length > 0 &&
                            <div className='w-[100%] '>
                                <p className='text-gray-400 text-sm uppercase'>May be related to:</p>
                                <p className='text-lg flex -ml-2'>
                                    {i.dependencies.slice(0, 5).map((x, y) => (
                                        <React.Fragment key={y}>
                                            <span className='mx-2'>{x.spouse_name || 'Unknown'}</span> 
                                            {y + 1 < Math.min(i.dependencies.length, 6) && <span className='mx-1'>•</span>}
                                        </React.Fragment>
                                    ))}
                                    {i.dependencies.length > 5 && (
                                        <span className='mx-2 text-gray-500'>
                                            +{i.dependencies.length - 8} more
                                        </span>
                                    )}
                                </p>
                            </div>
                            }
                        </div>    
                        <div className='flex-1 flex justify-end'>
                            <Link href={`/address-search/${i.id}`}>
                                <button className='py-3 px-5 rounded-xl hover:drop-shadow-lg bg-primary hover:bg-purple-700 text-white ease-in-out duration-150'>
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
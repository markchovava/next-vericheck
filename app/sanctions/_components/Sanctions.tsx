"use client"
import React, { useState } from 'react'
import SanctionResult from './SanctionResult';
import SanctionSourceList from './SanctionSourceList';
import { FaSearch } from 'react-icons/fa';
import { censoredPeoplePaginateAction, censoredPeopleSearchAction } from '../../_actions/CensoredPeopleActions';

export default function Sanctions() {
    const [result, setResult] = useState({
        data: [], 
        links: {}, 
        loadMore: false, 
        error: false, 
        loading: false,
        meta: {},
    })
    const [query, setQuery] = useState("");
    const [isResult, setIsResult] = useState(false)

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            await searchData()
        }
    }

    async function getData(url) {
        setResult({
            ...result, 
            loadMore: true
        })
        try {
            const res = await censoredPeoplePaginateAction(url) 
            console.log(res)
            
            // Ensure res.data exists and is an array
            const newData = Array.isArray(res?.data) ? res.data : []
            const currentData = Array.isArray(result.data) ? result.data : []
            
            setResult({
                error: false,
                data: [...currentData, ...newData],
                loading: newData.length === 0,
                links: res?.links || {},
                loadMore: false, 
                meta: res?.meta || {},
            });
        } catch (error) {
            console.error(`Error: ${error}`)
            setResult({
                error: true,
                data: [],
                loading: false,
                links: {},
                loadMore: false, 
                meta: {}
            });
        } 
    }

    async function searchData() {
        if (!query.trim()) {
            setResult({
                data: [], 
                links: {}, 
                error: true, 
                loading: false,
                loadMore: false, 
                meta: {},
            })
            setIsResult(true)
            return
        }
        
        // Set loading state
        setResult({
            data: [], 
            links: {}, 
            error: false, 
            loading: true,
            loadMore: false, 
            meta: {},
        })
        setIsResult(true)
        
        try {
            const res = await censoredPeopleSearchAction(query) 
            console.log("res", res)
            
            // Ensure res.data exists and is an array
            const searchData = Array.isArray(res?.data) ? res.data : []
            
            setResult({
                error: searchData.length === 0,
                data: searchData,
                loading: false,
                links: res?.links || {},
                loadMore: false, 
                meta: res?.meta || {}
            });
        } catch (error) {
            console.error(`Error: ${error}`)
            setResult({
                error: true,
                data: [],
                loading: false,
                links: {},
                loadMore: false, 
                meta: {}
            });
        } 
    }
    
    return (
        <>
            <header className="max-w-4xl mx-auto mb-8">
                <h1 className="text-4xl font-extrabold text-purple-600 mb-4 select-none">
                    Sanctions Datasets
                </h1>
                <p className="text-gray-700 dark:text-gray-300 mb-6 select-none">
                    Search through curated datasets focused on people on sanctions from
                    trusted sources.
                </p>
                <div className='w-full max-w-xl overflow-hidden rounded-md relative bg-gray-800 text-gray-100 flex items-center justify-start border border-purple-600 hover:ring-4 hover:ring-purple-300'>
                    <input
                        type="text"
                        aria-label="Search datasets"
                        placeholder="Search people, companies, and other entities of interest..."
                        className="flex-5 p-3 outline-none bg-transparent"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                        onKeyDown={handleKeyPress}
                    />
                    <button 
                        onClick={searchData}
                        disabled={result.loading}
                        className='group flex-1 p-3 border-l border-purple-600 flex items-center justify-center disabled:opacity-50'>
                        <FaSearch className='group-hover:scale-110 ease-linear duration-200 transition-all' />
                    </button>
                </div>
            </header>

            {isResult ? (
                <SanctionResult dbData={result} getData={getData} />
            ) : (
                <SanctionSourceList />
            )}
        </>
    )
}
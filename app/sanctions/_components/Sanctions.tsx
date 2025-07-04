"use client"
import React, { useState,  useMemo, useEffect } from 'react'
import SanctionResult from './SanctionResult';
import SanctionSourceList from './SanctionSourceList';
import { FaSearch } from 'react-icons/fa';
import { UserData } from '../../_data/UserData';
import { censoredPeopleSearchAction } from '../../_actions/CensoredPeopleActions';



export default function Sanctions() {
    const dataset = UserData
    const [result, setResult] = useState({data: [], error: false, loading: false})
    const [query, setQuery] = useState("");
    const [isResult, setIsResult] = useState(false)

    const handleSearch = () => {
        if (!query.trim()) {
            setResult({data: [], error: true, loading: false})
            setIsResult(true)
            return
        }

        // Set loading state
        setResult({data: [], error: false, loading: true})
        setIsResult(true)

        // Simulate search delay (remove this in production if not needed)
        setTimeout(() => {
            const searchResult = dataset.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            )
            
            setResult({
                data: searchResult, 
                error: searchResult.length === 0, 
                loading: false
            })
        }, 500) // 500ms delay to show loading state
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }


    async function searchData() {
        console.log("SEARCHING...")
        try{
            const res = await censoredPeopleSearchAction(query) 
            console.log('res')
            console.log(res)
            setResult({
                error: false,
                data: res.data,
                loading: res.data.length === 0
            });
        } catch (error) {
            console.error(`Error: ${error}`)
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
            className="flex-5 p-3  outline-none"
            value={query}
            onChange={(e) => {
                setQuery(e.target.value);
            }}
            onKeyDown={handleKeyPress}
            />
            <button 
                onClick={searchData}
                disabled={result.loading}
                className='group flex-1 p-3 border-l border-purple-600 flex items-center justify-center'>
                <FaSearch className='group-hover:scale-110 ease-linear duration-200 transition-all' />
            </button>
        </div>
        
    </header>

    {isResult ? (
        <SanctionResult dbData={result} />
    ) : (
        <SanctionSourceList />
    )}
    
    
    </>
  )
}

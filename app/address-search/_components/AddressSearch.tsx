"use client"
import React, { useState,  useMemo, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';
import { UserData } from '../../_data/UserData';
import  AddressSearchResult from './AddressSearchResult';
import  AddressSearchSourceList from './AddressSearchSourceList';
import { censoredPeoplePaginateAction, censoredPeopleSearchAction } from '../../_actions/CensoredPeopleActions';



export default function AddressSearch() {
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

    const handleKeyPress = async (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            await searchData()
        }
    }

    async function getData(url: string) {
        setResult({
            ...result, 
            loadMore: true
        })
        try{
            const res = await censoredPeoplePaginateAction(url) 
            console.log(res)
            setResult({
                error: false,
                data: [...result.data, ...res.data],
                loading: res.data.length === 0,
                links: res.links,
                loadMore: false, 
                meta: res.meta,
            });
        } catch (error) {
            console.error(`Error: ${error}`)
            setResult({
                error: false,
                data: [],
                loading: false,
                links: {},
                loadMore: false, 
                meta: {},
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
        try{
            const res = await censoredPeopleSearchAction(query) 
            console.log("res", res)
            setResult({
                error: false,
                data: res.data,
                loading: res.data.length === 0,
                links: res.links,
                loadMore: false, 
                meta: res.meta,
            });
        } catch (error) {
            console.error(`Error: ${error}`)
            setResult({
                error: false,
                data: [],
                loading: false,
                links: {},
                loadMore: false, 
                meta: {},
            });
        } 
    }



  return (
    <>
    <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold text-primary mb-4 select-none">
            Address Search Datasets
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 select-none">
            Search through curated datasets focused on politically exposed
            and sanctioned people from trusted sources.
          </p>
        <div className='w-full max-w-xl overflow-hidden rounded-md relative bg-gray-800 text-gray-100 flex items-center justify-start border border-primary hover:ring-4 hover:ring-primary'>
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
                className='group flex-1 p-3 border-l border-primary flex items-center justify-center'>
                <FaSearch className='group-hover:scale-110 ease-linear duration-200 transition-all' />
            </button>
        </div>
        
    </header>

    {isResult ? (
        < AddressSearchResult dbData={result} getData={getData} />
    ) : (
        < AddressSearchSourceList />
    )}
    
    
    </>
  )
}

"use client"

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Search() {
    const [input, setInput] = useState('')
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input.trim()) return
        router.push(`/search/${input}`);
        }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" className="border border-gray-200 rounded-3xl text-sm px-4 py-2"></input>
            </form>
        </div>
    )
}
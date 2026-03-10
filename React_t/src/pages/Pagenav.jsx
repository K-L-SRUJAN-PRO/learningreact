import React from 'react'
import { ChevronLeft, House, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Pagenav = () => {
    let nav= useNavigate();
    return (
        <div className='bg-indigo-400 h-full w-full flex gap-1 px-8'>
            <button className='bg-cyan-700 broder border px-2 py-2 rounded-xl m-2 active:scale-95'
                onClick={() => { nav('/')}}>
                <House /></button>
            <button className='bg-cyan-700 broder border px-2 py-2 rounded-xl m-2 active:scale-95'
                onClick={() => { nav(-1)}}>
                <ChevronLeft /></button>
            <button className='bg-cyan-700 broder border px-2 py-2 rounded-xl m-2 active:scale-95 '
                onClick={() => { nav(+1) }}>
                <ChevronRight />
            </button>
        </div>
    )
}

export default Pagenav
import React, { useState } from 'react'

import NoteForm from '../form/NoteForm';

const FloatingButton = ({ onAddNote }) => {
    const [isFormVisible, setisFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setisFormVisible(!isFormVisible);
    }

    return (
        <div className='fixed bottom-8 right-8'>
            <button
                className='bg-indigo-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
                onClick={toggleFormVisibility}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
            {
                isFormVisible && <NoteForm onAddNote={onAddNote} onClose={toggleFormVisibility} />
            }
        </div>
    )
}

export default FloatingButton
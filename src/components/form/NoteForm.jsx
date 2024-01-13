import React, { useState } from 'react'

const NoteForm = ({ onClose, onAddNote }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('bg-blue-100'); // Default color

    const handleColorChange = (e, color) => {
        e.preventDefault();
        setColor(color);
    };

    const handleFormClose = (e) => {
        e.preventDefault();
        onClose();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            alert('Please fill all the fields');
            return;
        }

        const newNote = {
            id: Math.floor(Math.random() * 10000) + 1,
            title,
            description,
            color,
            date: new Date(),
        }

        onAddNote(newNote);

        setTitle('');
        setDescription('');
        setColor('bg-blue-100');
        onClose();
    }

    return (
        <div className='absolute right-0 bottom-0 m-4 bg-white p-4 rounded-md shadow-md md:w-96' >
            <form onSubmit={handleSubmit}>
                <label htmlFor="title" className='block mb-2 text-gray-800'>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border rounded-md p-2 mb-4"
                />

                <label className="block mb-2 text-gray-800">Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border rounded-md p-2 mb-4"
                />

                <label className="block mb-2 text-gray-800">Color:</label>
                <div className="flex mb-4">
                    <div className="flex mb-4">
                        <div
                            onClick={(e) => handleColorChange(e, 'bg-blue-100')}
                            className={`w-6 h-6 rounded-full cursor-pointer mx-2 ${color === 'bg-blue-100' ? 'border border-blue-500' : ''}`}
                            style={{ backgroundColor: 'blue' }}
                        ></div>
                        <div
                            onClick={(e) => handleColorChange(e, 'bg-green-100')}
                            className={`w-6 h-6 rounded-full cursor-pointer mx-2 ${color === 'bg-green-100' ? 'border border-blue-500' : ''}`}
                            style={{ backgroundColor: 'green' }}
                        ></div>
                        <div
                            onClick={(e) => handleColorChange(e, 'bg-yellow-100')}
                            className={`w-6 h-6 rounded-full cursor-pointer mx-2 ${color === 'bg-yellow-100' ? 'border border-blue-500' : ''}`}
                            style={{ backgroundColor: 'yellow' }}
                        ></div>
                        <div
                            onClick={(e) => handleColorChange(e, 'bg-pink-100')}
                            className={`w-6 h-6 rounded-full cursor-pointer mx-2 ${color === 'bg-pink-100' ? 'border border-blue-500' : ''}`}
                            style={{ backgroundColor: 'pink' }}
                        ></div>
                        <div
                            onClick={(e) => handleColorChange(e, 'bg-purple-100')}
                            className={`w-6 h-6 rounded-full cursor-pointer mx-2 ${color === 'bg-purple-100' ? 'border border-blue-500' : ''}`}
                            style={{ backgroundColor: 'purple' }}
                        ></div>
                    </div>

                </div>


                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Add Note
                </button> <br />
                <button className='bg-red-500 mt-4 px-3 py-2 rounded-full text-white' onClick={handleFormClose}>
                    close
                </button>
            </form>
        </div>
    )
}

export default NoteForm
import React,{useState} from 'react'

import Note from './Note';
import Modal from '../util/Modal';

const NoteList = () => {
    const [selectedNote, setselectedNote] = useState(null);

    const handleNoteClick = (note) => {
        setselectedNote(note);
    }
    const handleCloseModal = () => {
        setselectedNote(null);
    }

    const colors = [
        'bg-blue-100',
        'bg-green-100',
        'bg-yellow-100',
        'bg-pink-100',
        'bg-purple-100',
    ];

    const DUMMY_NOTES = [
        {
            id: 1,
            title: 'Note 1',
            description: 'This is note 1',
            date: new Date(),
            color: 'bg-blue-100'
        },
        {
            id: 2,
            title: 'Note 2',
            description: 'This is note 2',
            date: new Date(),
            color: 'bg-green-100'
        },
        {
            id: 3,
            title: 'Note 3',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: new Date(),
            color: 'bg-yellow-100'  
        },
        {
            id: 4,
            title: 'Note 4',
            description: 'This is note 4',
            date: new Date(),
            color: 'bg-pink-100'
        },
        {
            id: 5,
            title: 'Note 5',
            description: 'This is note 5',
            date: new Date(),
            color: 'bg-purple-100'
        },
    ];

    return (
        <div className='mt-5 p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
            {DUMMY_NOTES.length > 0 ? (
                DUMMY_NOTES.map((note) => (
                    <div
                        key={note.id}
                        onClick={() => handleNoteClick(note)}
                        style={{ cursor: 'pointer' }}
                    >
                        <Note
                            title={note.title}
                            description={note.description}
                            date={note.date}
                            color={note.color}
                        />
                    </div>
                ))
            ) : (
                <p className='text-center text-xl text-gray-600'>
                    No notes found. Tap on the + icon to add a note.
                </p>
            )}
            {selectedNote && (
                <Modal note={selectedNote} onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default NoteList
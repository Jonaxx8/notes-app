import React, { useState, useEffect } from 'react';
import Note from './Note';
import Modal from '../util/Modal';

const NoteList = ({ notes , onDeleteNote}) => {
    const [selectedNote, setselectedNote] = useState(null);
    const [filteredNotes, setFilteredNotes] = useState(notes);

    const handleNoteClick = (note) => {
        setselectedNote(note);
    };

    const handleCloseModal = () => {
        setselectedNote(null);
    };

    const handleDeleteNote = (id) => {
        onDeleteNote(id);
        setselectedNote(null); // Close the modal after deleting
    };

    useEffect(() => {
        setFilteredNotes(notes);
    }, [notes]);

    return (
        <div className='mt-5 p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
            {filteredNotes.length > 0 ? (
                filteredNotes.map((note) => (
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
                <Modal note={selectedNote} onClose={handleCloseModal} onDelete={handleDeleteNote} />
            )}
        </div>
    );
};

export default NoteList;

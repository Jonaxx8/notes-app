import React, { useState } from 'react';
import Nav from '../components/navbar/Nav';
import NoteList from '../components/notes/NoteList';

const HomePage = () => {
    const [notes, setNotes] = useState([
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
            description: "Lorem Ipsum is simply dummy text...",
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
    ]);

    const [filteredNotes, setFilteredNotes] = useState([]);

    const handleSearch = (searchValue) => {
        const filtered = notes.filter((note) =>
            note.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredNotes(filtered);
    };

    const onDeleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <>
            <Nav onSearch={handleSearch} />
            <NoteList notes={filteredNotes.length > 0 ? filteredNotes : notes}  onDeleteNote={onDeleteNote}/>
        </>
    );
};

export default HomePage;

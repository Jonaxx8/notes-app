import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/navbar/Nav';
import NoteList from '../components/notes/NoteList';

const HomePage = () => {

    return (
        <>
            <Nav />
            <NoteList />
        </>
    )
}

export default HomePage
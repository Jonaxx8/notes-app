import React from 'react'

const Note = (props) => {
    const {title, description, date, color} = props;
    
    const limitedDescription =
        description.length > 100
            ? `${description.substring(0, 100)}...`
            : description;

    return (
        <div className={`bg-white shadow-lg rounded-md p-4 mb-4 ${color}`}>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">{limitedDescription}</p>
            <p className="text-sm text-gray-400">{date.toLocaleDateString()}</p>
        </div>
    )
}

export default Note
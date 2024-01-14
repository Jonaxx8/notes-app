import React from 'react'

const Sort = ({ sortOrder, onSortToggle }) => {
    return (
        <div className="flex items-center justify-end p-4">
            <span className="mr-2">Sort:</span>
            <label className="mr-2">
                <input
                    type="radio"
                    value="asc"
                    checked={sortOrder === 'asc'}
                    onChange={() => onSortToggle('asc')}
                />
                Asc
            </label>
            <label>
                <input
                    type="radio"
                    value="desc"
                    checked={sortOrder === 'desc'}
                    onChange={() => onSortToggle('desc')}
                />
                Desc
            </label>
        </div>
    );
};


export default Sort
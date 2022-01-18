import React, { useState} from 'react'

export default function SearchBar({ recipes }) {
    return (
        <>
            <div className="search-bar-container">
                <input type="text" className="search-bar" placeholder='search' />
            </div>  
        </>
    )
}

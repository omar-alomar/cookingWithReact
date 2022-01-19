import React from 'react'

export default function Creator({ creator }) {
    return (
        <>
            <span>{creator.firstName}</span>
            <span>{creator.lastName}</span>
        </>
    )
}

import React from 'react'
import Creator from './Creator'

export default function CreatorList({ creators }) {
    const creatorsElement = creators.map(creator => {
        return <Creator key={creator.id} creator={creator} />
    })
    return (
        <div className="ingredient-grid">
            {creatorsElement}
        </div>
    )
}

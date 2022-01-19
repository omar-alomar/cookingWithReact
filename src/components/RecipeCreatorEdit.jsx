import React from 'react'

export default function RecipeCreatorEdit(props) {
    const { creator, handleCreatorDelete, handleCreatorChange } = props

    function handleChange(changes) {
        handleCreatorChange(creator.id, {...creator, ...changes})
    }
    return (
        <>
            <input className="recipe-edit__input" onChange={e => handleChange({ firstName: e.target.value })} />
            <input className="recipe-edit__input"onChange={e => handleChange({ lastName: e.target.value })} />
            <button className="btn btn--danger" onClick={() => handleCreatorDelete(creator.id)}>&times;</button>
        </>
    )
}

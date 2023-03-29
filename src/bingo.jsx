import { useState } from "react"

import "./bingo.css"

export const BingoGrid = (props) => {
    let [selections, setSelections] = useState({})
    const {prompts} = props

    const onToggleSelect = (index) => {
        let newSelections = {...selections}
        if (Object.keys(newSelections).indexOf(index.toString()) !== -1) {
            // It has been selected some time before
            newSelections[index] = !newSelections[index]
        } else {
            // Doesnt exist so is not selected
            newSelections[index] = true
        }
        setSelections(newSelections)
    }

    const isSelected = (index) => {
        return Object.keys(selections).indexOf(index.toString()) !== -1 && selections[index]
    }

    return (
        <div className="bingo-form">
            {prompts.map((prompt, index) => (
                <div className={`bingo-square ${isSelected(index) ? "selected" : ""}`} onClick={() => onToggleSelect(index)}>
                    <span>{prompt}</span>
                </div>
            ))}    
        </div>
    )
}
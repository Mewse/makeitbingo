import React from "react"
import "./toolbar.css"

export const ToolBar = (props) => {
    const {themes, onThemeSwitch, onRefreshSelected} = props

    return (
        <div className="toolbar">
            <ThemeSwatch themes={themes} 
                         onThemeSwitch={onThemeSwitch} 
                         onRefreshSelected={onRefreshSelected} />
        </div>
    )
}

const ThemeSwatch = (props) => {
    const {themes, onThemeSwitch, onRefreshSelected} = props
    return (
        <React.Fragment>
            <p>Choose a theme:</p>
            <span>
                {themes.map(theme => (
                    <div className={`theme-swatch ${theme.bg}`} onClick={() => onThemeSwitch(theme)}/>
                ))}
            </span>
            <button onClick={onRefreshSelected}>Refresh Selected</button>
        </React.Fragment>
    )
}
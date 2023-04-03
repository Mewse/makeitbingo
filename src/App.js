import React, { useState } from 'react';
import './App.css';
import {allPrompts} from "./prompts/projectRunway"
import { BingoGrid } from './bingo';
import { ToolBar } from './toolbar';

const selectPrompt = (previousSelection) => {
  while (true) {
    const id = Math.floor(Math.random() * allPrompts.length)
    if (previousSelection.indexOf(id) === -1) {
      return id
    }
  }
}

const refreshSelected = (current, selectedIndices) => {
  // Replace selected with new
  // Select new from all - current
  const updatedSelections = [...current]
  const newPrompts = []
  for (let i = 0; i < Object.keys(selectedIndices).length; i++) {
    newPrompts.push(selectPrompt(current + newPrompts))
  }
  for (let i = 0; i < Object.keys(selectedIndices).length; i++) {
    updatedSelections[Object.keys(selectedIndices)[i]] = newPrompts[i]
  }
  return updatedSelections
}

const chooseIndices = () => {
  let chosenIndices = []
  for (let i = 0; i < 25; i++) {
    chosenIndices.push(selectPrompt(chosenIndices))
  }
  return chosenIndices
}

const choosePrompts = (chosenIndices) => {
  const newPrompts = []
  for (let id of chosenIndices) {
    newPrompts.push(allPrompts[id])
  }
  return newPrompts
}

const themes = [
  {
      bg: "blue-bg",
      bgText: "white-fg",
      selected: "red-bg",
      selectedText: "white-fg",
  },
  {
      bg: "grey-bg",
      bgText: "white-fg",
      selected: "orange-bg",
      selectedText: "white-fg"
  },
  {
      bg: "black-bg",
      bgText: "white-fg",
      selected: "white-bg",
      selectedText: "black-fg"
  },
  {
      bg: "purple-bg",
      bgText: "white-fg",
      selected: "pink-bg",
      selectedText: "white-fg"
  },
  {
      bg: "dark-blue-bg",
      bgText: "white-fg",
      selected: "bright-red-bg",
      selectedText: "white-fg"
  },
]

function App() {
  let [theme, setTheme] = useState(themes[0])
  let [chosen, setChosen] = useState(chooseIndices())
  let [prompts, setPrompts] = useState(choosePrompts(chosen))
  let [selections, setSelections] = useState({})

  const onRefreshSelected = () => {
    const newChosen = refreshSelected(chosen, selections)
    setChosen(newChosen)
    setPrompts(choosePrompts(newChosen))
  }

  return (
    <React.Fragment>
      <ToolBar themes={themes} onThemeSwitch={setTheme} onRefreshSelected={onRefreshSelected}/>
      <BingoGrid prompts={prompts} theme={theme} selections={selections} setSelections={setSelections}/>
    </React.Fragment>
  );
}

export default App;

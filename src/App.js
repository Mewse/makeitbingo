import logo from './logo.svg';
import './App.css';

import { BingoGrid } from './bingo';

const allPrompts = [
  "'Sad'",
  "'Make It Work'",
  "Someone gets thrown under a bus",
  "'Thanks Mood'",
  "A dog is on screen",
  "'Disaster'",
  "'I ran out of time'",
  "Fight",
  "Heidi hates it",
  "Sewing machine breaks",
  "'Smoky Eye + Nude Lip'",
  "'DONT TALK TO ME LIKE THAT'",
  "'DONT TELL ME TO CALM DOWN'",
  "'She looks like a _____'",
  "'Calm down'",
  "Too many accessorites",
  "'Matronly",
  "Someone quits",
  "'I am done'",
  "They completely ignore the challenge",
  "Someone comes back",
  "Previous contestant shows up",
  "'Vulgar'",
  "'Inexpensive'",
  "Heidi loves it",
  "Nobody leaves"
]

const selectPrompt = (previousSelection) => {
  while (true) {
    const id = Math.floor(Math.random() * allPrompts.length)
    if (previousSelection.indexOf(id) === -1) {
      return id
    }
  }
}

function App() {
  
  let prompts = []
  let chosenIndices = []
  for (let i = 0; i < 25; i++) {
    chosenIndices.push(selectPrompt(chosenIndices))
  }

  for (let id of chosenIndices) {
    prompts.push(allPrompts[id])
  }

  return (
    <BingoGrid prompts={prompts} />
    
  );
}

export default App;

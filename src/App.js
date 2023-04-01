import logo from './logo.svg';
import './App.css';

import { BingoGrid } from './bingo';

const allPrompts = [
  "'Sad'",
  "'Make It Work'",
  "Someone gets thrown under the bus",
  "'Thanks Mood'",
  "A dog is on-screen",
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
  "Too many accessories",
  "'Matronly'",
  "Someone quits",
  "'I am done'",
  "They completely ignore the challenge",
  "Someone comes back",
  "Previous contestant shows up",
  "'Vulgar'",
  "'Inexpensive'",
  "Heidi loves it",
  "Nobody leaves the competition",
  "(Wilhelm scream)",
  "'Fashion forward'",
  "'Oh my god'",
  "'Thoughtful' / 'strategic'",
  "'Channel your inner winner'",
  "'Dowdy'",
  "'Unfortunate'",
  "'Weird crotch'",
  "'Here to win'",
  "They aren't here to make friends",
  "Family reunion",
  "'Bizarre'",
  "'Washed out'",
  "Someone's a hot mess",
  "Someone sits on a table",
  "They use animal print",
  "Someone rips some fabric",
  "'I don't do _____ ",
  "'Sorry, not sorry'",
  "'Predictable'",
  "Judges have seen it before",
  "'Stunning'",
  "'Elegant'",
  "'Like a cocktail / prom dress'",
  "'Disappointing'",
  "'A transformation'",
  "Multiple people go home",
  "Someone is not impressed",
  "They have a lot of work to do",
  "'Take it to the next level'",
  "Someone trusts their gut",
  "'I might go home for this'",
  "'Really boring'",
  "'Mother of the bride'",
  "'More drama'",
  "They need to wow the judges",
  "Tim is concerned",
  "'Really strong'",
  "Boy shorts",
  "Something looks costume",
  "Someone makes coffee",
  "Someone brushes their teeth",
  "A mannequin falls over",
  "Someone is crazy about it",
  "Something is `on the line`",
  "'Fits like a glove'",
  "Someone is surprised",
  "Nina loves it",
  "'It's too simple'",
  "Michael loves it",
  "'This is it'",
  "It's different",
  "'Cool'",
  "'WOW pieces'",
  
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

import { languages } from "./Language";
import { useState } from "react";
import {getFarewellText} from "./utils"
import rand from "./random_word"
import Confetti from 'react-confetti'
import { useWindowSize } from '@react-hook/window-size';

import clsx from 'clsx'; // Import clsx for conditional className handling

export default function Headers() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; // All keyboard letters
const [width, height] = useWindowSize();

  const [currentWord, setCurrentWord] = useState(rand()); // Word to guess
  const [userGuess, setUserGuess] = useState([]); // Track user's guesses
  
  // Count wrong guesses to limit attempts if needed
  const wrong_guess_count = userGuess.filter(letter => !currentWord.includes(letter)).length;
  const lastGuess = userGuess[userGuess.length-1]
  const isLastLetterWrong = lastGuess && !currentWord.includes(lastGuess)
 
  // Handle user's guess (avoid duplicates)
  function guess(letter) {
    setUserGuess((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    );
  }
 // Game Over module
 const is_game_won = currentWord.split("").every(letter =>userGuess.includes(letter))

 const is_game_lost = wrong_guess_count >=  languages.length-1
  const is_game_over = is_game_won || is_game_lost
  // Generate language chips from imported list
  const langlist = languages.map((language, index) => {
    const is_lang_lost = index<wrong_guess_count;
    const tyle = {
      backgroundColor: language.backgroundColor,
      color: language.color
    };
    return (
      <span
       key={index} 
       className= {`chip ${is_lang_lost ? "lost" : "" }`}
       style={tyle}>
        {language.name}
      </span>
    );
  });


  // Map each letter of currentWord to a styled box; only show if guessed
  const letters_arr = [...currentWord];
  const arr_map = letters_arr.map((letter, index) => {
    const revealLetter  = is_game_lost || userGuess.includes(letter)
    const missedLetter = clsx(
      is_game_lost && ! userGuess.includes(letter) && "missed-letter"
    )
    return (
      <span key={index} className={`word ${missedLetter} `}>
        {revealLetter ? letter.toUpperCase() : ""}
        
      </span>
    );
  });
  
function state_banner() {
    if (!is_game_over && isLastLetterWrong ) {
        return (
          <div className="status-banner status-win">
           
            <p className="status-message-farewell">
              {
                getFarewellText(languages[wrong_guess_count-1].name)
              }
            </p>
        </div>
          
        )
    }
    if(is_game_won){
       return (
        <div className="status-banner status-win">
            <h2 className="status-title">Victory Achieved!</h2>
            <p className="status-message">Bravo, coder! You’ve outsmarted Assembly. 🎉👨‍💻</p>
        </div>
    );

    }
    else if(is_game_lost){
       return (
        <div className= "status-banner status-lost">
            <h2 className="status-title"> Game Over!</h2>
            <p className="status-message">"Go and learn Assembly. 💀</p>
        </div>
    );

    }
    else{
      return null;
    }

  
 
}

    

  // Generate on-screen keyboard with color feedback
  const key_map = alphabet.split("").map((wor) => {
    const is_guessed = userGuess.includes(wor);
    const is_correct = is_guessed && currentWord.includes(wor); // Correct guess
    const is_wrong = is_guessed && !currentWord.includes(wor); // Wrong guess

    return (
      <button
      disabled = {is_game_over}
        key={wor}
        value={wor}
        onClick={() => guess(wor)} // Call guess function on click
        className={clsx({
          green: is_correct, // Apply 'green' class if correct
          red: is_wrong      // Apply 'red' class if wrong
        })}
      >
        {wor.toUpperCase()}
      </button>
    );
  });
 // start new game
  function startNewGame(){
    setCurrentWord(() => rand())
    setUserGuess([])
  }
  // UI Layout
  return (
    <main className="main-container">
      {/* Game header with title and instructions */}
      <header className="game-header">
        <h1 className="game-title">🛡️ Assembly: Endgame</h1>
        <p className="game-subtitle">
          Save the coding universe! Guess the word within <strong>8 tries</strong> to stop Assembly from taking over. 💻⚔️
        </p>
      </header>

      {/* Status banner (can later be dynamic for win/loss) */}
      <section className="section1">
        {state_banner()}
   
      </section>

      {/* Language color tags */}
      <section className="langlist">
        {langlist}
      </section>

      {/* Word boxes displaying letters if guessed */}
      <section className="Guess_work">
        {arr_map}
      </section>

      {/* Keyboard with color feedback */}
      <section className="keyboard_sec">
        {key_map}
      </section>
      {is_game_won && (
  <Confetti
    width={width}
    height={height}
    numberOfPieces={300}
    gravity={0.25}
    initialVelocityY={15}
    recycle={false}
  />
)}


      {/* Reset game button */}
      <section>
        {
            is_game_over && <button className="new-games" onClick={startNewGame}>New Game</button>
        }
      </section>
    </main>
  );
}



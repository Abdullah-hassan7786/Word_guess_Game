# 🛡️ Assembly: Endgame

**Assembly: Endgame** is a fun, interactive word-guessing game built with **React**. Inspired by classic Hangman mechanics, your mission is to defeat "Assembly" by correctly guessing the hidden word within a limited number of attempts. Each wrong guess eliminates a programming language — lose them all, and Assembly takes over! 💻⚔️

---

## 🎮 Gameplay Overview

- 🔤 Guess a randomly selected word using the on-screen keyboard.
- 🧠 Limited attempts (based on the number of languages).
- ❌ Every wrong guess removes a language from your defense line.
- ✅ Guess the word correctly — you win! 🎉
- 💀 Run out of guesses — Game Over!

---

## 🎯 Features

- 🎲 **Dynamic Word Generation** – New challenge each game
- 🧩 **Language Chip System** – Visual feedback for wrong guesses
- 🎹 **On-Screen Keyboard** – Color-coded responses (green = correct, red = wrong)
- 🎉 **Victory Animation** – Confetti celebration on win
- 🔁 **One-click Reset** – Start a new game easily

---

## 🛠️ Tech Stack

- **React** – Functional component structure
- **React-Confetti** – Celebration effect
- **clsx** – Conditional class handling
- **@react-hook/window-size** – Responsive layout support

---

## 📁 File Highlights

| File                      | Description                                |
|---------------------------|--------------------------------------------|
| `src/Components/Header.jsx`  | Main game logic and UI                    |
| `src/Components/random_word.js` | Random word generator               |
| `src/Components/Language.js`   | Language list and styling info        |
| `src/Components/utils.js`      | Farewell texts and helpers            |

---

## 🚀 Getting Started

In the project directory, run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view in your browser.

---

### `npm test`

Launches the test runner in watch mode.\
More info: [Running Tests](https://facebook.github.io/create-react-app/docs/running-tests)

---

### `npm run build`

Builds the app for production to the `build` folder.\
More info: [Deployment](https://facebook.github.io/create-react-app/docs/deployment)

---

### `npm run eject`

⚠️ **Note:** This is a one-way operation.\
Only eject if you need full control of configuration files (Webpack, Babel, ESLint, etc.)

---

## 📸 Preview

*Add screenshots or gameplay GIFs here.*

---

## 📌 Future Improvements

- ⌨️ Support for physical keyboard input
- 🎯 Difficulty levels (word length / timer)
- 🏆 Score or streak tracking
- 🌗 Dark/light theme toggle

---

## 📚 Learn More

- [React Documentation](https://reactjs.org/)
- [Create React App Guide](https://facebook.github.io/create-react-app/docs/getting-started)


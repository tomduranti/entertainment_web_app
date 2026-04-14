import { useState } from 'react';
import api from './js/api.js/api.js'

export default function App() {
  const [userInput, setUserInput] = useState('');

  const {
    getAPIData,
  } = api(userInput)

  return (
    <>
      <input
        type='text'
        placeholder='Search for movies or TV series'
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={() => getAPIData('movie')} type='button'>Search</button>
    </>
  )
}
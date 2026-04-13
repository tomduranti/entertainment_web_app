import { useState } from 'react';
import Functions from './functions.js'

export default function App() {
  const [userInput, setuserInput] = useState('');

  const {
    getAPIData,
  } = Functions(userInput)

  return (
    <>
      <input 
        type='text'
        placeholder='Search for movies or TV series'
        onChange={(e) => setuserInput(e.target.value)}
      />
      <button onClick={getAPIData} type='button'>Search</button>

      <div>result is {userInput}</div>
    </>
  )
}
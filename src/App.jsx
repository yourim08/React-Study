import Hello from './components/Hello'
import Counter from './components/Counter'
import { useState } from 'react'
import Like from './components/Like'
import Vote from './components/Vote'
import Intro from './components/intro'
import Fetch_01 from './components/Fetch_01'
import Fetch_02 from './components/Fetch_02'
import Fetch_03 from './components/Fetch_03'
import ToDoInput from './components/todo'

function App() {
  return ( 
    <>
      <div>
        {<ToDoInput />}
      </div>
    </>
  )
}

export default App

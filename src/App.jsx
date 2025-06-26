import Hello from './components/Hello'
import Counter from './components/Counter'
import { useState } from 'react'
import Like from './components/Like'
import Vote from './components/Vote'


function App() {
  return ( 
    <>
      <div>
        <Vote question="새로운 회사 정책에 찬성하시나요?" />
        <Vote question="수민 VS 시웅, 시웅이가 더 이쁜가요?" />
      </div>
    </>
  )
}

export default App

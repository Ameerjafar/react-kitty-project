import { useState } from 'react'
import { Button } from './Component/Button';
import './App.css';
function App() {
  const [getColor, setColor] = useState('blue');
  return (
    <div className='app' style = {{backgroundColor: getColor}}>
      <Button setColor = {setColor}></Button>
    </div>
  )
}

export default App
  
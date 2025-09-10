import {useState} from 'react'
import reactLogo from './assets/react.svg'
import cruelty from './assets/Cruelty.jpeg'
import sewer from './assets/sewerpipe.png'
import './App.css'

function App(){
  const [count, setCount] = useState(0)

  return(
    <>
      <div>
        <a href="./other_pages/idk.html">
          <img src={sewer} className="logo" alt="Different page button"/>
        </a>
      </div>
      <div>
        <a href="https://github.com/Steve-985?tab=repositories" target="_blank">
          <img src={cruelty} className="logo" alt="The face of cruelty" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Steven + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Steven points: {count}
        </button>
        <p>
          Welcome to the Steven test website.
        </p>
      </div>
      <p className="read-the-docs">
        Click on Steven's face of cruelty and React logos to learn more.
      </p>
    </>
  )
}

export default App

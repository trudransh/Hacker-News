import React, { useState } from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'
import Connect from './Connect'
import './App.css'
function App() {

  const [login, setLogin] = useState(false);
  return (
    <>
      {!login ? (
        <Connect login={login} setLogin={setLogin} />
      ) : (
        <div >
          <div>
            <SearchForm />
            <Buttons />
            <Stories />
          </div>
          <button
            className='logout-btn'
            onClick={()=>{
              setLogin(false)
            }}
          >
            logout
          </button>
        </div>
      )}
    </>
  )
}

export default App

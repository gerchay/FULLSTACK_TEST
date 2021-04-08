import React, { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Results } from './components/Results'

const App = () => {

  const [texts, setTexts] = useState([])

  useEffect( () => {

  }, [texts])

  return(
    <>
      <div className="row">
        <div className="col-md-12">
          <Header setTexts={ setTexts } />
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-8 offset-2">
          <Results texts={texts} />
        </div>
      </div>
      
    </>
  )
}

export default App

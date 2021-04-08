import './App.css'
import React, { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Results } from './components/Results'

const App = () => {

  const [texts, setTexts] = useState([])

  useEffect( () => {

  }, [texts])

  return(
    <>
      <Header setTexts={ setTexts } />
      <Results texts={texts} />
    </>
  )
}

export default App

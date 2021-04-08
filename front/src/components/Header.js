import './Header.css'
import React, { useState } from 'react'
import { Navbar, FormControl, Button, Container, InputGroup } from 'react-bootstrap'
import { getTexts } from '../hooks/getText'

export const Header = ({ setTexts }) => {

  const [inputValue, setInputValue] = useState(''); 

  const handleInputChange = ( e ) => {
      setInputValue( e.target.value );
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      if ( inputValue.trim().length > 2 ) {
        const newText = await getTexts(inputValue)
        console.log(newText)
        setTexts( cats => [ newText, ...cats, ] )
        setInputValue('')
      }else{
        alert('Insert Text')
      }
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <Navbar bg="dark" variant="dark" expand="md" sticky="top">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav">
              <InputGroup className="mb-3 mt-3">
                <FormControl
                  placeholder="Insert Text"
                  value={ inputValue }
                  onChange={ handleInputChange }
                  aria-label="Insert Text"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" onClick={handleSubmit}>Send</Button>
                </InputGroup.Append>
              </InputGroup>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

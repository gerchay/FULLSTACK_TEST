import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

export const Results = ({ texts }) => {

  return (
    <Card>
      <Card.Header>
        <Card.Title>Results:</Card.Title>
        <Card.Subtitle>Text - Palindrome</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush text-center" variant="flush">
          {
            texts.map( ({text, palindrome},i) => (
              <ListGroupItem key={ i }>{text}   -  {palindrome ? 'true' : 'false'}</ListGroupItem>
            ))
          }
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

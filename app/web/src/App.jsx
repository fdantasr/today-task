import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

class Welcome extends React.Component {
  constructor(props) { //Revisar Constructor
    super(props); //Revisar Super
    this.state = { date: new Date() }; //Revisar this
  }
  render() {
    {/*function Welcome(props) {*/ }
    return (
      <div className='escopoGeral'>
        <h1>Olá, {this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default function App() {
  return (
    <>
      <Welcome name="Dantas" />
    </>
  )
}

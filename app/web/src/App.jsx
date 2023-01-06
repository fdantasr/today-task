import React from 'react';
import './App.css'

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logado: false,
      nivel: 0,
    }
  }

  verify() {
    // this.setState({ logado: !this.state.logado })
    this.setState(
      (state) => (
        { logado: !state.logado }
      )
    )
  }

  level() {
    this.setState(
      (state, props) => (
        { nivel: state.nivel + props.fator }

      )
    )
  }

  render() {
    {/*function Welcome(props) {*/ }
    return (
      <div className='escopoGeral'>
        <h1>Olá, {this.props.name}, seu nível é de: {this.state.nivel}</h1>
        <h2>Você está: {this.state.logado ? 'Logado' : 'Deslogado'} </h2>
        <p>{this.state.logado ? 'Clique no botão abaixo para sair' : 'Cique no botão abaixo para fazer login'}</p>
        <button onClick={() => this.verify()}>
          {this.state.logado ? 'Sair' : 'Entrar'}
        </button>
        <button onClick={() => this.level()}>
          Level
        </button>
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

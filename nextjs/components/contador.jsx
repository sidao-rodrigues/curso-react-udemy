import { Component } from 'react';

export default class Contador extends Component {

  state = {
    numero: this.props.valorInicial ?? 0,
    passo: this.props.passo ?? 1
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  renderForm() {
    return (
      <>
        <h2>{this.props.valorInicial}</h2>
        <h2>{this.state.numero}</h2>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </>
    )
  }

  render() {
    return (
      <div>
        <h1>Contador usando classe</h1>
        {this.renderForm()}
      </div>
    )
  }
}
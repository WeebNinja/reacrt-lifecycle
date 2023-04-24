import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props)
    console.log('Load consructor')
    this.state={
      count: 0
    }
  }

  

  componentWillUnmount(){
    console.log('Load componentWill')
  }

  componentDidMount(){
    console.log('Load componentDid')
  }

  shouldComponentUpdate(){
    console.log('Load shouldComponentUpdate')
    return true
  }

  render() {
    console.log('Load render')
    return(
      <>
      <h1>Number is:{this.state.count}</h1>
      <button type='button'onClick={() => this.setState({count:this.state.count+1})}>Count</button>
      <button type='button'onClick={() => this.setState({count:this.state.count=0})}>Set Zero</button>
      
      <ChildComponent name='Nattapon Jaijina'/>
      </>
    )
  }
}

class ChildComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return <h3>{this.props.name}</h3>
  }
}

export default App
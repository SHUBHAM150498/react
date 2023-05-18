import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
         <span id='flex2'>
         <h1>This is created using class component</h1>
         <p>This is done using external css</p>
         <p id="pBlue" style={{color:"blue"}}>This is done using inline css</p>
        
</span>
      </div>
    )
  }
}
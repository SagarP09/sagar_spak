import React from 'react'

class Comp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'abc',
      age: 80
    };
  }


  render() {
    return (
      <div style={{border: '1px solid grey'}}>
        <p>Hello, {this.state.name}</p>
        <p> Age: {this.state.age} </p>
        <p> count: {this.props.count} </p>
      </div>
    
    );
  }
}


export default Comp2
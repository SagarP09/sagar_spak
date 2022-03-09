import React , {useState} from 'react'

function Comp1(props) {
  
  const [name, setName] = useState('abc')
  const [age, setAge] = useState(70)
  //setAge(30)
  
  // const [xyz, setName] = useState({ name : 'abc' , age: 70})
  // setName({...xyz,age:30})
  
  return (
    <div style={{border: '1px solid grey'}}>
      <p>Hello, {name}</p>
      <p> Age: {age} </p>
      <button onClick={()=>{props.addNumber()}}> Add </button>
      <button onClick={()=>{props.decNumber()}}> Sub </button>
    </div>
  )
}

export default Comp1


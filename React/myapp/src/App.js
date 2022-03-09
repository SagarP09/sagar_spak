import React , {useState} from 'react';
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2';

function App() {

  const [count, setCount] = useState(0)

  const addNumber = () => setCount(count+1);
  let decNumber = () => {
    if(count>0){
      setCount(count-1)
    }    
  }

  return (
    <div className="App">
      my app
      <br/>
     <Comp1 addNumber={addNumber} decNumber={decNumber}/>
     <br/>
     <Comp2 count={count} />
    </div>
  );
}

export default App;

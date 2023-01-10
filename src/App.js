import './App.css';

import {useState} from 'react';

function Count() {
  const [count,setCount] = useState(0);
  const increment=()=>{
    setCount(count+1)
  }

  const decrement=()=>{
    setCount(count-1)
  }

  const Reset=()=>{
    setCount(0);
  }

  let a="React Counter"
  return (
    <div className="App">
      <div>
      {a}
      </div>
      <div>
      <sanp>{count}</sanp>
      </div>
    <button onClick={increment}>+</button>

    <sanp className='result'></sanp>
    <button onClick={decrement}>-</button>
    <div className='Reset'>

    <button onClick={Reset}>

      <sanp>Reset</sanp>

      </button>

    </div>
    </div>
  );

}
export default Count;
import {useCallback, useState} from 'react'
import Child from './Child'


const UseCallback = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState('Batata Frita');

    const returnData = useCallback(
        (name) => {
            return data + name;
        },
        [data]
    );

  return (
    <div>
        <h1>UseCallback</h1>
        <Child returnData={returnData}/>
    
        <button 
            onClick={() => setToggle(!toggle)}
            >
            {" "}
            Toggle
        </button>
        {toggle && <h1>Toggle</h1>}
    </div>
  )
}

export default UseCallback
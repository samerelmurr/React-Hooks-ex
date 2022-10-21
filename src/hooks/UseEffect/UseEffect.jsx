import {useEffect, useState} from 'react'
import axios from 'axios';

const UseEffect = () => {

    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
        //   setData(response.data.email);
          for(let i = 0; i < response.data.length; i++){
            	setData(response.data[i].email);
                console.log(data);
            }
        });
    }, []);

    let randomNumber = () => {
        setCount(Math.floor(Math.random() * data.length));
    }
    
  return (
    <div>
        <h1>UseEffect hook demonstration: </h1>
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button
            onClick={randomNumber}
        >
            Click
        </button>
    </div>
  )
}

export default UseEffect
import {useState} from 'react'

const UseState = () => {

    const [name, setName] = useState('');
    	
    // let changeName = () => {
    //     setName('Gilles de Bilde');
    // }

    let onChange = (event) => {
        setName(event.target.value);
    }

    let onSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    }



  return (
    <div>
        <h1>UseState hook demonstration: </h1>
         <p>Hello my is {name}</p>
        {/*<input placeholder="enter something..." onChange={onChange} /> */}
        {/* <button onClick={changeName()}>Change name</button> */}
        <form onSubmit={onSubmit}>
            <label>Name: </label>
            <input type="text" value={name} onChange={onChange} />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default UseState;
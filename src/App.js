import './App.css';
import {Hooks} from "./hooks/hooks";


function App() {
  return (
    <>
      <Hooks.UseState/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <Hooks.UseEffect/> */}
      <br/>
      <br/>
      <br/>
      <Hooks.UseContext/>
      <br/>
      <br/>
      <Hooks.UseCallback/>
      <br/>
      <br/>
      <Hooks.UseMemo/>
      <br/>
      <br/>
      <Hooks.UseRef/>
    </>
  );
}

export default App;

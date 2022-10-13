import './App.css';
import React, {useState} from "react";
import Box from "./components/box/Box";

function App() {
  const [count, updateCount] = useState(0); //contador del padre
  const [count1, updateCount1] = useState(0); //contador hijo replica
  const [count2, updateCount2] = useState(0);
  const [count3, updateCount3] = useState(0);

function boxClicked(brother){
  updateCount(count + 1);
  if (brother === 1) {
    updateCount1(count1 + 1);
  }
  else if (brother ===2) {
    updateCount2(count2 + 1);
  }
  else{
    updateCount3(count3 + 1);
  }


}

  return (
    <div className="App">
      <header className="App-header">
       <h1>Probando</h1>
       <Box id={1} brotherCount ={count2 + count3} boxClicked={boxClicked}/>
       <Box id={2} brotherCount = {count1 + count3} boxClicked={boxClicked}/>
       <Box id={3} brotherCount =  {count1 + count2} boxClicked={boxClicked}/>
       <br/>
       <p>Contador Padre: {count} </p>

      </header>
    </div>
  );
}

export default App;

import React, {useState} from "react";

function Box(props){

    const [count, updateCount] = useState(0); //contador hijo
    
    function click(){
        props.boxClicked(props.id);
        updateCount(count + 1);
    }
    

    return(
        <div onClick={() => click()}>
            <h1>Box {props.id} </h1>
            <p>Contador Hijo: {count}</p>
            <p>Diferencia entre hijos: {count - props.brotherCount} </p>
        </div>
    );
}

export default Box;
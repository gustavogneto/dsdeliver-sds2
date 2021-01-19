import { count } from "console";
import { useState } from "react"

function Counter(){
    const [counter, setCounter] = useState(0);

    const handleIncrease = () =>{
        setCounter(counter+1);
    }
    const handleDecrease = () =>{
        setCounter(counter-1);
    }

    return(
        <div>
           <button onClick={handleIncrease}> incrementar </button>
           <button onClick={handleDecrease}> decrementar </button>
           <h1>Valor do contador: {counter}</h1>
        </div>
    )
}

export default Counter;
import { useState } from "react";

export default function Counter() {
    const [count,setCount ] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const increment2 = () => {
        setCount(count + 3)
    }
    return (
        <div>
            <p>count:  {count}</p>
            <button onClick={increment}>click1</button>
            <button onClick={increment2}>click3</button>
        </div>
    )
}

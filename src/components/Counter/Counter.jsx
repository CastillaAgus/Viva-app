import { useState } from "react"



export function Counter ({stock}) {

const [amount, setAmount ] = useState(0)

const plus = () => {
    if ( amount < stock ){
        setAmount(amount +1);
    }
};

const minus = () => {
    if(amount >= 1) {
        setAmount(amount -1);
    }
};

return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent:
            'center', margin: '10px 0' }}>
            <button onClick={minus}>-</button>
            <p style={{ margin: '0 10px' }}>{amount}</p>
            <button onClick={plus}>+</button>
        </div>

)



} 
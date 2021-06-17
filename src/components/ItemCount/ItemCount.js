import React, { useState } from "react"
import Button from '@material-ui/core/Button'

function ItemCount() {
    
    const [number, setNumber] = useState(0)

    const handleCounterUp = () => {
        setNumber(number + 1)
    }

    const handleCounterDown = () => {
        if (number > 0) {
            setNumber(number - 1)            
        }
    }

    return (
        <>
            <div>
                Cantidad:
                {number}
            </div>  
            <div>
                <Button onClick={handleCounterUp} variant="contained" color="primary">
                    +
                </Button>
                <Button onClick={handleCounterDown} variant="contained" color="secondary">
                    -
                </Button>
            </div>
        </>
    )
}

export default ItemCount
import React, { useState } from "react"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import './ItemCount.css'

// MAKESTYLES PARA MATERIAL UI
const useStyles = makeStyles({
    btnAddToCart: {
        backgroundColor: '#f5e73d',
        '&:hover': {
            backgroundColor:'gold'
        },
        margin: 5
    },
    btnMoreLess: {
        margin: 5
    }
});


function ItemCount({stock, initial, onAdd}) {
    const classes = useStyles()
    
    const [number, setNumber] = useState(initial)

    const handleCounterUp = () => {
        if (number < stock){
            setNumber(number + 1)
        } else {
        }
        
    }

    const handleCounterDown = () => {
        if (number > 1) {
            setNumber(number - 1)            
        }
    }

    return (
        <>
            <div>
                <Button onClick={handleCounterUp} className={classes.btnMoreLess} variant="contained" color="primary" size="small">
                    +
                </Button>
                <span className="item-count-number">{number}</span>
                <Button onClick={handleCounterDown} className={classes.btnMoreLess} variant="contained" color="secondary" size="small">
                    -
                </Button>
            </div>
            <div>
                <Button onClick={()=>onAdd(number)} className={classes.btnAddToCart} variant="contained" size="small">Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount
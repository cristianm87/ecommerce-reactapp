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
        marginTop: 30,
        margin: 5
    },
    btnMoreLess: {
        margin: 5,
        fontSize: 18
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
        <div className="item-count">
            <div className="item-count-wrapper">
                <Button onClick={handleCounterUp} className={classes.btnMoreLess} variant="contained" color="primary" size="small">
                    +
                </Button>
                <div className="item-count-number-wrapper">
                    <span className="item-count-number">{number}</span>
                </div>
                <Button onClick={handleCounterDown} className={classes.btnMoreLess} variant="contained" color="secondary" size="small">
                    -
                </Button>
            </div>
            <div>
                <Button onClick={()=>onAdd(number)} className={classes.btnAddToCart} variant="contained" size="small">Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount
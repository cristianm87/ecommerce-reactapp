import React, { useState } from "react"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import './ItemCount.css'
import { Link } from "react-router-dom";

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

function ItemCount({stock, initial, onAdd, item}) {
    const classes = useStyles()
    console.log(item)

    
    const [number, setNumber] = useState(initial)


    const sumUno = () => {
        if (number < stock){
            setNumber(number + 1)
            
        }
    }

    const restaUno = () => {
        if (number > 1) {
            setNumber(number - 1)            
        }
    }

    return (
        <div className="item-count">
            <div className="item-count-wrapper">
                <Button onClick={sumUno} className={classes.btnMoreLess} variant="contained" color="primary" size="small">
                    +
                </Button>
                <div className="item-count-number-wrapper">
                    <span className="item-count-number">{number}</span>
                </div>
                <Button onClick={restaUno} className={classes.btnMoreLess} variant="contained" color="secondary" size="small">
                    -
                </Button>
            </div>
            <div>
                <Link to="/cart">
                    <Button onClick={()=>onAdd(number)} className={classes.btnAddToCart} variant="contained" size="small">Agregar al carrito</Button>
                </Link>
            </div>
        </div>
    )
}

export default ItemCount

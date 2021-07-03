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
    btnBuy: {
        backgroundColor: '#FA69A1',
        '&:hover': {
            backgroundColor: '#FA69B9',
        },
        marginTop: 30,
        margin: 5
    },
    btnMoreLess: {
        margin: 5,
        fontSize: 18
    }
});

function ItemCount({stock, initial, onAdd, item, btnComprar}) {

    const classes = useStyles()

    console.log(item)

    const [cant, setCant] = useState(initial)
    

    const sumUno = () => {
        if (cant < stock){
            setCant((prevCant) => prevCant + 1)
            
        }
    }

    const restaUno = () => {
        if (cant > 1) {
            setCant((prevCant) => prevCant  - 1);
        }
    }

    return (
        <div className="item-count">
            <div className="item-count-wrapper">
                <Button disabled={cant <= initial} onClick={restaUno} className={classes.btnMoreLess} variant="contained" color="secondary" size="small">
                    -
                </Button>
                <div className="item-count-number-wrapper">
                    <span className="item-count-number">{cant}</span>
                </div>
                <Button disabled={cant >= stock} onClick={sumUno} className={classes.btnMoreLess} variant="contained" color="primary" size="small">
                    +
                </Button>
            </div>
            <div>
                { btnComprar === true ?
                (
                    <Link to="/cart">
                        <Button className={classes.btnBuy} variant="contained" size="small">Terminar mi comprar</Button>
                    </Link>                    
                )

                :
                (
                    <Button onClick={()=>onAdd(cant)} className={classes.btnAddToCart} variant="contained" size="small">Agregar al carrito</Button>
                )
            }

            </div>
        </div>
    )
}

export default ItemCount

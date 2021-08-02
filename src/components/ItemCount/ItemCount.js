import React, { useState, useContext } from "react"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import './ItemCount.css'
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'

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

function ItemCount({stock, initial, item}) {

    const classes = useStyles()

    const myContext = useContext(CartContext)

    const [quantity, setQuantity] = useState(initial)
    const [btnComprar, setBtnComprar] = useState(false)

    const onAdd = () => {
        myContext.addItem({item, quantity})
        setBtnComprar(true);
    }

    const sumUno = () => {setQuantity((prevquantity) => prevquantity + 1)}

    const restaUno = () => {setQuantity((prevquantity) => prevquantity - 1)}

    return (
        <div className="item-count">
            <div className="item-count-wrapper">
                <Button disabled={quantity <= initial || btnComprar} onClick={restaUno} className={classes.btnMoreLess} variant="contained" color="secondary" size="small">
                    -
                </Button>
                <div className="item-count-number-wrapper">
                    <span className="item-count-number">{quantity}</span>
                </div>
                <Button disabled={quantity >= stock || btnComprar } onClick={sumUno} className={classes.btnMoreLess} variant="contained" color="primary" size="small">
                    +
                </Button>
            </div>
            <div>
                { 
                    btnComprar === true ?
                    (
                        <Link to="/cart">
                            <Button className={classes.btnBuy} variant="contained" size="small">Ir al carro</Button>
                        </Link>                    
                    )
                    :
                    (
                        <Button onClick={()=>onAdd(quantity)} className={classes.btnAddToCart} variant="contained" size="small">Agregar al carrito</Button>
                    )
                }
            </div>
        </div>
    )
}

export default ItemCount

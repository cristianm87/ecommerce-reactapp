import React, { useState, useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/firebase';

import './Form.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      maxWidth: '300px',
      display:'block',
    },
  },
}));

function Form() {

  const {order, ordenCliente} = useContext(CartContext)

  const classes = useStyles();

  const initialState = {
    nombre: '',
    telefono: '',
    email: ''
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target
    //copiamos los valores actuales, y el input [name] que estemos actualizando le colocamos el valor actual que estemos tipeando (value)
    setValues({ ...values, [name]: value });
  };

  const handleOnClick = (e) => {
    order(values)
    sendOrder(ordenCliente)
    setValues({ ...initialState })
    console.log(ordenCliente)
  };


  const sendOrder = async (ordenCliente) => {
    await db.collection('orders').doc().set(ordenCliente);
  }

  const [values, setValues] = useState(initialState)

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <p>Complete sus datos para finalizar la compra</p>
      <div>
        <TextField 
          onChange={handleOnChange}
          required
          name="nombre"
          id="form-input-name" 
          label="Nombre"
          type="text"
          value={values.nombre}  />
        <TextField
          onChange={handleOnChange}
          required
          name="telefono"
          id="form-input-phone"
          label="Telefono"
          type="tel"
          value={values.telefono}
        />
        <TextField
          onChange={handleOnChange}
          required
          name="email"
          id="form-input-email"
          label="Email"
          type="email"
          value={values.email}
        />
        <Link className="Link" to="/order">
          <Button onClick={handleOnClick} type="submit" variant="contained" color="primary">Enviar</Button>
        </Link>
      </div>
    </form>
  );
}


export default Form;
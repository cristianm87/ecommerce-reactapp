import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { db } from '../../firebase/firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100px',
      display:'block',
    },
  },
}));

function Form({order}) {
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

  const handleOnSubmit = (e) => {
    e.preventDefault()
    order(values)
    setValues({ ...initialState })
  };

  const [values, setValues] = useState(initialState)

  return (
    <form onSubmit={handleOnSubmit} className={classes.root} noValidate autoComplete="off">
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
        <Button type="submit" variant="contained" color="primary">Enviar</Button>
      </div>
    </form>
  );
}


export default Form;
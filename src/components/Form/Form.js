import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Directions } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100px',
      display:'block',
    },
  },
}));

function Form() {

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField required 
            id="standard-required" 
            type="text" 
            label="Nombre" />
        <TextField required
            id="standard-number"
            label="Telefono"
            type="tel"
        />
        <TextField
            id="standard-email"
            label="Email"
            type="email"
        />
        <Button type="submit" variant="contained" color="primary">Enviar</Button>
      </div>
    </form>
  );
}


export default Form;
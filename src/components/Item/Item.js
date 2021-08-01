import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 260,
    maxWidth: 385,
    height: 280,
    background:'var(--bg-card)',
    padding: '20px 0px 20px 0px'
  },
  media: {
    width: 200,
    height: 140,
    margin:'auto'
  },
});

function Item({products}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={products.img}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2">
           {products.shortDescription} <br />
           Precio: ${products.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Más detalles
        </Button>
      </CardActions>
    </Card>
  );
}

export default Item


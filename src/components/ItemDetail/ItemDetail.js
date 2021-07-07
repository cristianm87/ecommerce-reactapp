import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Spinner from '../Spinner/Spinner';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 445,
        minWidth: 380,
        padding: 10,
        background:'var(--bg-card)'
    },
    media: {
        height: 50,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

function ItemDetail({ product }) {

    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
        {product.length === 0 ? (
        <Spinner />               
        ) : (
            <>
            {product.map((x) => {
                return (
                <Card key={x.id} className={classes.root}>
                    <CardHeader
                        title={x.shortDescription}
                        subheader=" "
                    />
                    <CardMedia
                        className={classes.media}
                        image={x.img}
                        title=""
                    />
                    <CardContent>
                        <Typography variant="subtitle1" color="initial" component="p">
                            Precio: ${x.precio}<br/>
                            Marca: {x.marca}<br/>
                            Modelo: {x.modelo}
                        </Typography>
                    </CardContent>
                    <CardContent> 
                        <div className="card-amount">
                            <ItemCount stock={5} initial={1} item={x}/>
                        </div>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Más detalles</Typography>
                            <Typography paragraph>
                                {x.longDescription}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                );
            })}</>
            )
        }
        </>
    )
}

export default ItemDetail
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {
    CardHeader,
    CardMedia,
    CardContent,
    Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
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

    return (
        <>
            {
            product.length === 0 ? 
            (
                <Spinner />               
            ) 
            : 
            (
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
                                    Marca: {x.marca}<br/>
                                    Modelo: {x.modelo}<br/>
                                    Precio: ${x.precio}
                                </Typography>
                            </CardContent>
                            <CardContent> 
                                <div className="card-amount">
                                    <ItemCount stock={5} initial={1} item={x}/>
                                </div>
                            </CardContent>
                        </Card>
                        );
                    })}
                </>
            )
            }
        </>
    )
}

export default ItemDetail
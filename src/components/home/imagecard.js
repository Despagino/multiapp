import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';



const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        background: "rgba(0,0,0,0.5)",
        color: "white",
        margin: "20px",
        '&:hover': {
            transform: 'scale(1.06)'
        }
    },
    media: {
        height: 350,
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: 2.5 + 'rem',
        color: "#fff"
    },
    description: {
        fontSize: 1.5 + 'rem',
        color: "#ddd"
    }
});

export default function ImageCard({ Info, checked }) {
    const classes = useStyles();

    return (

        <Collapse in={checked} {...({ checked } ? { timeout: 3000 } : {})}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={Info.imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {Info.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                        {Info.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" href={Info.route} >
                        Open App
                </Button>
                </CardActions>
            </Card>

        </Collapse>

    );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './bible.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 545,

    },
});

export default function BibleVerses({ buttonfunction, verse, book, version }) {
    const classes = useStyles();


    return (
        <>
            <div className='body'>
                <div>
                    <button className='button' onClick={buttonfunction}>Click for a verse</button>
                </div>
                <div className='content'>
                    <Card className={classes.root}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.crossroadsinitiative.com/wp-content/uploads/2019/02/noahs-ark-facebook.jpg"
                        />
                        
                        <CardContent>
                        <hr />
                            <Typography gutterBottom variant="h5" component="h2">
                                {book} {version}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {verse}
                            </Typography>
                            
                        </CardContent>

                    </Card>
                </div>
            </div>
        </>
    );
}

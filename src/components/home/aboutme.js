import React from 'react'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpeg'})`,
        minHeight: '10vh',
        display: 'flex',
        padding: '20px',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    picture: {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/me.jpg'})`,
        width: "500px",
        height: "400px",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: "50px",
    },
    content: {
        textAlign: 'center',
        padding: '10px',

    }

});


const AboutMe = () => {

    const classes = useStyles();

    return (
        <>

            <div className={classes.root} id="aboutme" >
                <div className={classes.content}>
                    <h1 style={{ fontFamily: 'Roboto' }}>Developer: Gino Tasis</h1>
                    <h3>Software Engineer Learner at Per Scholas</h3>
                    <a href="https://www.linkedin.com/in/ginotasis/"><h3>LinkedIn</h3></a>
                </div>

                <div className={classes.picture}>
                </div>

            </div>

        </>
    )
}
export default AboutMe
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageCard from './imagecard'
import ScrollAnimation from './ScrollAnimation'

const useStyles = makeStyles((theme) => ({

    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/blackroom.jpeg'})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column'
        }
    }

}))


const Info = [

    {
        title: 'Crypto App',
        description: 'Search for your favorite crypto investment, learn more and add to your watchlist.',
        imageUrl: process.env.PUBLIC_URL + '/cryptoscreenshot.png',
        time: 1500,
        route: "/crypto"
    },
    {
        title: 'Weather App',
        description: 'What is the weather in Paris? Need to take a trip to the Bahamas? Get the weather info here.',
        imageUrl: process.env.PUBLIC_URL + '/weatherscreenshot.png',
        time: 1500,
        route: "/weather"
    },
    {
        title: 'Bible App',
        description: 'Browse for your favorite verse, look for motivation, seek for the truth by going to this Bible App.',
        imageUrl: process.env.PUBLIC_URL + '/bible.jpeg',
        time: 1500,
        route: "/bible"
    }
]


const GoApp = () => {
    const classes = useStyles()
    const checked = ScrollAnimation('header')
    return (
        <div className={classes.root} id='scrolldown' >
            <ImageCard Info={Info[0]} checked={checked} />
            <ImageCard Info={Info[1]} checked={checked} />
            <ImageCard Info={Info[2]} checked={checked} />
        </div>
    )
}

export default GoApp
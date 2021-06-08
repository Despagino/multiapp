import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageCard from './imagecard'
import ScrollAnimation from './ScrollAnimation'
import { Link as Scroll } from 'react-scroll'
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

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
    },
    scrolltome: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        minHeight: '10vh',
    }

}))


const Info = [

    {
        title: 'Crypto App',
        description: 'Search for your favorite crypto investment, learn about the gains and the losses of each crypto you see.',
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
        description: 'Click for a random generated Bible verse, look for motivation, seek for the truth by going to this Bible App.',
        imageUrl: process.env.PUBLIC_URL + '/bible.jpeg',
        time: 1500,
        route: "/bible"
    }
]


const GoApp = () => {
    const classes = useStyles()
    const checked = ScrollAnimation('header')
    return (
        <div>
            <div className={classes.root} id='scrolldown' >
                <ImageCard Info={Info[0]} checked={checked} />
                <ImageCard Info={Info[1]} checked={checked} />
                <ImageCard Info={Info[2]} checked={checked} />
                <Scroll to='scrolldown' smooth={true}>
                    <KeyboardArrowDownOutlinedIcon className='scrolldown' style={{ fontSize: 50, color: "indigo" }} />
                </Scroll>

            </div>
        </div>

    )
}

export default GoApp
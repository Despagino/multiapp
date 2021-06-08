import React, { useState, useEffect } from 'react'
import './home.css'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from '../navbar/Navbar'
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import { Zoom } from '@material-ui/core'
import GoApp from './gotoapps'
import { Link as Scroll } from 'react-scroll'
import AboutMe from './aboutme'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/whitehallway.jpeg'})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: -85 + 'px'
    }
}));

const Home = () => {
    const classes = useStyles()

    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true)
    }, [])


    return (
        <>
            <NavBar />
            <Scroll to='scrolldown' smooth={true}>
                <div className={classes.root} id='header'>
                    <Zoom in={checked} {...(checked ? { timeout: 2000 } : {})} collapsedheight={50}>
                        <div className='bodycontent'>
                            <h1 id='homeh1'>Welcome to <br /><span id='h1style'>My Apps.</span></h1>
                            <KeyboardArrowDownOutlinedIcon className='scrolldown' style={{ fontSize: 50 }} />
                        </div>
                    </Zoom>
                </div>
            </Scroll>
            <GoApp checked={checked} />
            <AboutMe />

        </>
    )
}

export default Home

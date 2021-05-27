import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import './navbar.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';

const NavBar = () => {
    return (
        <>
            <div className='icons'>
                <Link to="/">
                    <HomeOutlinedIcon id='home' style={{ fontSize: 40 }} />
                </Link>

                <Link to="/crypto">
                    <MonetizationOnOutlinedIcon id='crypto'style={{ fontSize: 40 }} />
                </Link>
                <div>
                    <Link to="/weather">
                        <CloudOutlinedIcon id='weather' style={{ fontSize: 40 }} />
                    </Link>
                </div>
                <div>
                    <Link to="/bible">
                        <ImportContactsTwoToneIcon id='bible' style={{ fontSize: 40 }} />
                    </Link>
                </div>
            </div>

        </>
    )
}

export default NavBar


import React, { useState } from 'react'
import NavBar from '../navbar/Navbar'
import './bible.css'
import BibleVerses from './inputbible'


const Bible = () => {

    const [info, setInfo] = useState({})

    const onButtonClick = () => {

        fetch('http://www.ourmanna.com/verses/api/get?format=json&order=random')
            .then(response => response.json())
            .then(data => setInfo(data.verse.details))
    }

    return (
        <>
            <NavBar />
            <BibleVerses
                book={info.reference}
                verse={info.text}
                buttonfunction={onButtonClick}
                version={info.version}
            />
        </>
    )
}

export default Bible
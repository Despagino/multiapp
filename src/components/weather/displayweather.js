import React, { useState, useEffect } from 'react'

const DisplayWeather = (props) => {

    const [search, setSearch] = useState('San Francisco')
    const [data, setData] = useState('')



    const getData = (event) => {
        event.preventDefault()
        props.submitForm(search)
    }




    return (
        <div>
            <div>
                <form action="" onSubmit={getData}>
                    <input type="text" onChange={(e => setSearch(e.target.value))} value={search} />
                </form>
            </div>
            <div>
                <div>San Francisco</div>
                <div>{thedate(new Date())}</div>
            </div>
            <div className='weather'>
                <div>15 F</div>
                <div>Sunny</div>
            </div>
        </div>

    )


}

export default DisplayWeather
import React, { useState, useEffect, } from 'react'
import './crypto.css'
import axios from 'axios'
import Coin from './coin'
import NavBar from '../navbar/Navbar'

const Crypto = () => {


    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data)
            })
            .catch(error => alert("Error try again. Error:" + error))
    }, [])



    const handleChange = e => {
        setSearch(e.target.value)
    }


    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()))



    return (
        <>
            <NavBar />
            <div className='coin-body'>
                <div className='coin-app'>
                    <div className='backgroundImage coin-search'>
                        <h1 className='coin-text'>Search Currency</h1>
                        <form action="">
                            <input className='coin-input' type="text" placeholder='Search crypto' onChange={handleChange} />
                        </form>
                    </div>
                    {
                        filteredCoins.map(coin => {
                            return (
                                <Coin
                                    key={coin.id}
                                    name={coin.name}
                                    image={coin.image}
                                    symbol={coin.symbol}
                                    marketcap={coin.market_cap}
                                    price={coin.current_price}
                                    priceChange={coin.price_change_percentage_24h}
                                    volume={coin.total_volume}
                                />
                            )
                        })
                    }
                </div >
            </div>
        </>
    )
}

export default Crypto
import React, { useState } from 'react'
import Modal from 'react-modal'
import './crypto.css'
Modal.setAppElement('#root')
const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {


    const [modalIsOpen, setModalIsOpen] = useState(false)


    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin' onClick={() => setModalIsOpen(true)}>
                    <div onClick={e => e.stopPropagation()}>
                        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                            <div className='modalcontent'>
                                <h1>{name}</h1>
                                <br />
                                <button classname='exitmodal' onClick={() => setModalIsOpen(false)}>X</button>
                            </div>
                            <div className='modalbody'>
                                <div>
                                    <img src={image} alt="" />
                                </div>
                                <hr />
                                <br />
                                <div>
                                    <h2>{symbol.toUpperCase()}</h2>
                                    <h2>{price.toLocaleString()}</h2>
                                    <h2>{volume.toLocaleString()}</h2>
                                </div>
                                <hr />
                                <img src="https://www.bitcointradingsites.net/wp-content/uploads/2018/07/fakeout21-1024x493.jpg" alt="" />
                            </div>
                        </Modal>
                    </div>
                    <img src={image} alt="crypto" />

                    <h1>{name.toUpperCase()} ({symbol.toUpperCase()})</h1>

                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price.toLocaleString()}</p>
                    <p className='coin-volume'>Volume: ${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red"> {priceChange.toFixed(2)}%</p>
                    )
                        : (
                            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                        )}
                    <p className="coin-marketcap">
                        Market Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Coin
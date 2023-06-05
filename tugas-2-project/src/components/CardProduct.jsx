import React from 'react'

const CardProduct = () => {
    return (
        <div style={{
            height: 150,
            width: 50,
            backgroundColor: grey,
            backgroundRadius: 4,
            
        }}>
            <h2>{props.namaProduk}Nama Produk</h2>
            <p>{props.hargaProduk}Harga : 15000</p>
        </div>
    )
}

export default CardProduct
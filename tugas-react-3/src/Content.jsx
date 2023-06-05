import React from 'react'
import './Content.css'


const Content = () => {
    const listProduct = [
        {
            id: 1,
            productName: 'Sneakers Converse CTAS',
            productPrice: 'Rp. 599.000',
            urlImage: 'https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/2/02-CONVERSE-FFSSBCONA-CONA03576C-Yellow.jpg'
        },
        {
            id: 2,
            productName: 'Converse Run Star Motion Canvas',
            productPrice: 'Rp. 1.799.000',
            urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/C/O/CON171546C-1.jpg'
        },
        {
            id: 3,
            productName: 'Converse CTAS Construct Colorblock',
            productPrice: 'Rp. 1.599.000',
            urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg'
        },
        {
            id: 4,
            productName: 'Converse Chuck Taylor All Star',
            productPrice: 'Rp. 899.000',
            urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg'
        },
        {
            id: 5,
            productName: 'Converse Unisex Chuck 70 Plus',
            productPrice: 'Rp. 1.599.000',
            urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA02871C-Brown.jpg'
        },
    ]

    const Notif = (productName, productPrice) => {
        alert (`Product ${productName} with price ${productPrice} is the best product in town`)
    }

    return (
        <div className='card'> {
            listProduct.map((value) => (
                <a key={value.id} onClick={() => Notif(value.productName, value.productPrice)}>
                    <img src={value.urlImage} alt={value.productName} style = {{width:"200px" , height:"200px", objectFit:"contain", marginLeft:10}}/>
                    <p>{value.productName}</p>
                    <p>{value.productPrice}</p>
                </a>
            ))}
        </div>
    )
}


export default Content
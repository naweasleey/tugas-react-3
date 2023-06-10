const CardProduct = (props) => {
    return (
        <div style={{
            height: 150,
            width: 150,
            backgroundColor: grey,
            borderRadius: 5,
            padding: 20,
            color: "black"

            
        }}>
            <h2>{props.namaProduk}Nama Produk</h2>
            <p>{props.hargaProduk}Harga : 15000</p>
        </div>
    )
}

export default CardProduct
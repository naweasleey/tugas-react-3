import CardProduct from "./CardProduct"

const Dashboard = () => {
    const listProduk = [
        {
            namaProduk: 'Light Stick',
            hargaProduk: 'Rp 500.000'
        },
        {
            namaProduk: 'Photo Card',
            hargaProduk: 'Rp 500.000'
        },
        {
            namaProduk: 'Key Chain',
            hargaProduk: 'Rp 500.000'
        },
        {
            namaProduk: 'Hand Banner',
            hargaProduk: 'Rp 500.000'
        },
        {
            namaProduk: 'T-Shirt',
            hargaProduk: 'Rp 500.000'
        },
    ]
    return (

        <div> {
            //LIST RENDERING
            listProduk.map((value, index) => {
                return <CardProduct key={index} namaProduk={value.namaProduk} hargaProduk={value.hargaProduk} />
            })
        }
        </div>

        // <div >
        //     Dashboard
        //     <CardProduct namaProduk="Sepatu" hargaProduk="Rp 120.000"/>
        // </div>
    )
}

export default Dashboard
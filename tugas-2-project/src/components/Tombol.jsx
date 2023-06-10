import './Tombol.css'


const styleTombol = {
    backgroundColor:'red',
    padding: '2',
    borderRadius: 3,
    border: 'none'
}

const Tombol =(custom)=> {
    return (
      <button className="btn-primary" style={styleTombol}>{custom.tulisan}</button>
    )
  }


//CSS INLINE
// const Tombol =(custom)=> {
//   return (
//     <button className="btn-primary" style={{
//         backgroundColor:'red',
//         padding: '2',
//         borderRadius: 3,
//         border: 'none'
//     }}>{custom.tulisan}</button>
//   )
// }

export default Tombol
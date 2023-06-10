
const styleHeader = {

  backgroundColor: 'yellow',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  fontStyle: 'Serif',
  fontSize: '30px'
}


const Header = () => {
    const nama = "Naily Rina Pribawa"

  return (
    <header style={styleHeader}>{nama}</header>
  )
}

export default Header
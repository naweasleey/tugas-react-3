import Header from './components/Header'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
// import KotakTeks from './components/Kotakteks'
// import Tombol from './components/Tombol'

function App() {
  const isLogged = true;
  return (

    <div style={{
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center'
    }}>
    
      <Header/>
      {isLogged ? <Dashboard/> : <Login/>}
    </div>
  )
}

export default App
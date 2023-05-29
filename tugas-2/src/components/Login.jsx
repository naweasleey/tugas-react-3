import KotakTeks from "./KotakTeks";
import Tombol from "./Tombol";

const Login = () => {
  return (
     <>
    <KotakTeks type="email" id="email" name="email"></KotakTeks>
    <KotakTeks type="password" id="password" name="password"></KotakTeks>
    <Tombol title="Log In"></Tombol>
        </>
  )
}

export default Login

import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as Logo } from "../assets/crown.svg"
import './navigation.styles.scss'
export default function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
            <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
          <Link className="nav-link" to='/sign-in'>SIGN IN</Link>
          <Link></Link>
          <Link></Link>
        </div>
      </div>
        <Outlet/>
    </Fragment>
  )
}

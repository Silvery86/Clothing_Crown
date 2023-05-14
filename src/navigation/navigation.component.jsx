import { Link, Outlet } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as Logo } from "../assets/crown.svg"
import './navigation.styles.scss'
import { UserContext } from "../contexts/user.context"
import { signOutUser } from "../utils/firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { CartContext } from "../contexts/cart.context"
export default function Navigation() {

  const { currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);


  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
            <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ):(
            <Link className="nav-link" to='/sign-in'>SIGN IN</Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
        <Outlet/>
    </Fragment>
  )
}

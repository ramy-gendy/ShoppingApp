import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping, faUser, faBell } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className="container min-w-full h-full">
      <div className="m-3 grid grid-cols-6 content-center">
        <div className="ml-3 text-3xl col-span-4 text-blue-500">One Store Jar</div>
        <div className="text-md place-self-center">Call Center</div>
        <div className="text-md place-self-center">Shipping And Returns</div>
      </div>
      <div className="grid grid-cols-8 p-4 bg-gray-100 content-center">
        <div className="text-md place-self-center">
          <Link to="/">Shop</Link>
        </div>
        <div className="text-md place-self-center">
          <Link to="/promo">Promo</Link>
        </div>
        <div className="text-md place-self-center">
          <Link to="/about">About</Link>
        </div>
        <div className="text-md place-self-center">
          <Link to="/blog">Blog</Link>
        </div>
        <FontAwesomeIcon className="text-md place-self-center" icon={faHeart} />
        <FontAwesomeIcon className="text-md place-self-center" icon={faCartShopping} />
        <FontAwesomeIcon className="text-md place-self-center" icon={faUser} />
        <FontAwesomeIcon className="text-md place-self-center" icon={faBell} />
        <Outlet />
      </div>
    </div>
  );
}

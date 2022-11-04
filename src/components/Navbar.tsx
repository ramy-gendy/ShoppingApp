import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faCartShopping, faUser, faBell } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className="container min-w-full h-full">
      <div className="grid grid-cols-6 content-center">
        <div className="m-4 text-3xl col-span-4 text-blue-500">One Store Jar</div>
        <div className="text-md">Call Center</div>
        <div className="text-md">Shipping And Returns</div>
      </div>
      <div className="grid grid-cols-11 p-4 bg-gray-100 content-center">
        <div>
          <Link to="/">Shop</Link>
        </div>
        <div>
          <Link to="/promo">Promo</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/blog">Blog</Link>
        </div>
        <div id="searchInput" className="col-span-3 content-center">
          <input
            type="text"
            name="searchInput"
            maxLength={100}
            placeholder="What do you need?"
            className="w-4/6"
          />
          <FontAwesomeIcon onClick={() => console.log('clicked')} icon={faMagnifyingGlass} className="border-2 bg-blue-400" />
        </div>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faCartShopping} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faBell} />
        <Outlet />
      </div>
    </div>
  );
}

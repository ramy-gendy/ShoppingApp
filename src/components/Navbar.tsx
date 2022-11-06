import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faUser,
  faBell,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="container min-w-full h-full">
      <div className="m-3 grid grid-cols-6 content-center">
        <div className="ml-3 text-3xl col-span-4 text-blue-500">
          One Store Jar
        </div>
        <div className="text-md place-self-center">Call Center</div>
        <div className="text-md place-self-center">Shipping And Returns</div>
      </div>
      <div className="grid grid-cols-5 p-4 bg-gray-100 content-center">
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
        <div className="hidden md:grid md:grid-cols-4">
          <div>
            <FontAwesomeIcon
              icon={faHeart}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCartShopping}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faUser}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBell}
            />
          </div>
        </div>
        <div className="md:hidden place-self-center">
          <button onClick={() => setNavbarOpen(!navbarOpen)}>
            <FontAwesomeIcon
              icon={faBars}
            />
          </button>
        </div>
      </div>
      <div className={`text-md place-self-center ${navbarOpen ? 'grid grid-rows-4' : 'hidden'}`}>
        <div className="text-md place-self-center mb-3 mt-4">
          <FontAwesomeIcon
            icon={faHeart}
            className="mr-3"
          />
          <label>Whishlist</label>
        </div>
        <div className="text-md place-self-center">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="mr-3"
          />
          <label>Cart</label>
        </div>
        <div className="text-md place-self-center">
          <FontAwesomeIcon
            icon={faUser}
            className="mr-3"
          />
          <label>Profile</label>
        </div>
        <div className="text-md place-self-center">
          <FontAwesomeIcon
            icon={faBell}
            className="mr-3"
          />
          <label>Messages</label>
        </div>
      </div>
    </div>
  );
}

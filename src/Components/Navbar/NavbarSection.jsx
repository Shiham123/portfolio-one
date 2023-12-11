// import { NavLink } from 'react-router-dom';
import Logo from '../../assets/_06cc4017-b38b-4b61-a4a2-2871c9b6d694.jpg';

// import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const data = [
  { label: 'Home', to: '/' },
  { label: 'Contact', to: '/contact' },
];

const NavbarSection = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={'/'} className="navbar__container__logo">
            <div className="flex gap-4">
              <img
                src={Logo}
                width={70}
                height={70}
                className="rounded-full"
                alt=""
              />
              <h1 className="font-caveat text-5xl">Shiham</h1>
            </div>
          </Link>
        </div>
        <ul
          className={`navbar__container__menu ${toggleIcon ? 'active' : ''} `}
        >
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? (
            <HiX color="#001c55" size={30} />
          ) : (
            <FaBars size={30} color="#001c55" />
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarSection;

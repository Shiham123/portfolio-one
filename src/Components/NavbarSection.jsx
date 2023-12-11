import { NavLink } from 'react-router-dom';
import Logo from '../assets/_06cc4017-b38b-4b61-a4a2-2871c9b6d694.jpg';

const data = [
  { label: 'Home', to: '/' },
  { label: 'Contact', to: '/contact' },
];

const NavbarSection = () => {
  return (
    <div className="navbar bg-colorOne p-8">
      <div className="flex-1">
        <div className="flex justify-center items-center gap-4">
          <img
            src={Logo}
            width={70}
            height={70}
            className="rounded-full"
            alt=""
          />
          <h1 className="font-caveat text-5xl">Shiham</h1>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <div className="flex gap-8">
            {data.map((item, index) => {
              const { label, to } = item;
              return (
                <div key={index}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? '' : '')}
                  >
                    <li>{label}</li>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavbarSection;

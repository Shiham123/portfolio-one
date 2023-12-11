import { Outlet } from 'react-router-dom';
import FooterSection from '../Components/FooterSection';
import NavbarSection from '../Components/Navbar/NavbarSection';

const MainLayout = () => {
  return (
    <>
      <NavbarSection />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default MainLayout;

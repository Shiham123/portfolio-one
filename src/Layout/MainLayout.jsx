import { Outlet } from 'react-router-dom';
import NavbarSection from '../Components/NavbarSection';
import FooterSection from '../Components/FooterSection';

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

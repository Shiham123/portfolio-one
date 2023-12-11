import { Outlet } from 'react-router-dom';
import NavbarSection from '../Components/NavbarSection';
import FooterSection from '../Components/FooterSection';

const MainLayout = () => {
  return (
    <div>
      <NavbarSection />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default MainLayout;

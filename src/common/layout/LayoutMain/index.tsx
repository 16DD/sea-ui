import { Box } from '@mui/material';
import Footer from 'common/components/Footer';
import Header from 'common/components/Header';
import { Outlet } from 'react-router-dom';

const LayoutMain = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default LayoutMain;

import { Outlet } from 'react-router-dom';
import { Page, Header, Footer } from '../../components';

const Layout = () => {
  return (
    <>
      <Page />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

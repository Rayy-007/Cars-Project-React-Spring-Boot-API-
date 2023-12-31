import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components/pagesImport";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

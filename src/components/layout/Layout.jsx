import { Footer } from "./footer/Footer"
import { Navbar } from "./navbar/Navbar";
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
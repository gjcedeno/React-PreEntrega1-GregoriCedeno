import { Footer } from "./footer/Footer"
import { Navbar } from "./navbar/Navbar";
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{minHeight: "calc(100vh - 244px)"}}>
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};
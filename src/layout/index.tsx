import { Outlet } from "react-router-dom";
import Navbar from "./header";

const MainLayout = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Navbar />
      <div
        style={{
          height: `calc(100vh - 64px)`,
          overflowY: "scroll",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

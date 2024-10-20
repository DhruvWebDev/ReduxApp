import Navbar from "../components/navbar";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Navbar />
        <Outlet />
      </main>
<div className="p-10 text-center outline-blue bg-dark mt-10 fixed-bottom custom-background text-white ">
    Made with 💗 by RoadsideCoder
</div>      </div>
  );
};

export default AppLayout;
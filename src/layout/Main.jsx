import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-slate-200 min-h-screen">
      <Outlet />
    </div>
  );
};

export default Main;

import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
export const layout = () => {
  return (
    <>
      <Navigation />
      <main className="pt-10">
        {/* espace sous le header */}
        <Outlet />
      </main>
    </>
  );
};

import { Route, Routes } from "react-router-dom";
import { HomePages } from "../pages/HomePages/HomePages";
import { layout } from "../components/layout";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={layout()}>
        <Route path="/" element={HomePages()} />
      </Route>
    </Routes>
  );
};

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { ContactPage } from "../pages/contactPage";
import { ProjectsPage } from "../pages/ProjectsPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={"/contact"} element={<ContactPage />} />
        <Route path={"/projects"} element={<ProjectsPage />} />
        <Route path={"/*"} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

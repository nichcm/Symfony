import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "../containers/home/list";
import CreateUser from "../containers/users/createuser";

const SystemRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/create-user/:id" element={<CreateUser />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default SystemRoutes;

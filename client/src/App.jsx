import { NavBar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [profile, setProfile] = useState(localStorage.getItem("profile"));
  const [visibleSetting, setVisibleSetting] = useState(true);

  useEffect(() => {
    if (profile) return setVisibleSetting(true);
    else navigate(`/login`);
  }, [profile]);

  return (
    <>
      {visibleSetting && (
        <>
          <CssBaseline />
          <NavBar>
            <Outlet />
          </NavBar>
        </>
      )}
    </>
  );
}

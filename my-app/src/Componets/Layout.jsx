// src/Components/Layout.jsx
import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./Sidebar.css";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // check login
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/Login");
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* ======= NAVBAR ======= */}
      <header>
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container-fluid">
            <div className="d-flex align-items-center gap-3">
              <button
                className="menu-btn"
                type="button"
                onClick={toggleSidebar}
              >
                ☰
              </button>
              <Link className="navbar-brand fw-bold fs-4 text-light" to="/">
                MyCabApp 🚗
              </Link>
            </div>

            <div className="collapse navbar-collapse show d-none d-lg-flex justify-content-end">
              <ul className="navbar-nav align-items-center gap-3">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Blog">Blog</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-light" to="/RideHistory">
                    Ride History
                  </Link>
                </li>

                {/* 🔥 LOGIN LOGIC */}
                {!isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <Link className="btn login-btn" to="/Login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="btn register-btn" to="/Register">Register</Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <button className="btn btn-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* ======= SIDEBAR ======= */}
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h4 className="text-white mb-0">MyCabApp</h4>
          <button
            className="btn-close btn-close-white"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <nav className="mt-4">
          <ul className="list-unstyled">
            <li><Link to="/" onClick={() => setIsOpen(false)}>🏠 Home</Link></li>
            <li><Link to="/Blog" onClick={() => setIsOpen(false)}>📰 Blog</Link></li>
            <li><Link to="/RideHistory" onClick={() => setIsOpen(false)}>🧾 Ride History</Link></li>
            <li><Link to="/CabBookingForm" onClick={() => setIsOpen(false)}>🚗 Book Ride</Link></li>

            {/* 🔥 SIDEBAR LOGIN LOGIC */}
            {!isLoggedIn ? (
              <>
                <li><Link to="/Login" onClick={() => setIsOpen(false)}>🔑 Login</Link></li>
                <li><Link to="/Register" onClick={() => setIsOpen(false)}>🧍 Register</Link></li>
              </>
            ) : (
              <li>
                <button
                  className="btn btn-danger w-100 mt-2"
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </aside>

      {/* ======= MAIN CONTENT ======= */}
      <main className="container my-4" style={{ minHeight: "65vh" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;

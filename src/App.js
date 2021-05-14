import React from "react";
import "./admin-2.css";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Logout from "./Logout_modal";
function App() {
  return (
    <>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div className="container-fluid">
              <Dashboard></Dashboard>
            </div>
          </div>
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Be We Website 2021</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      <Logout></Logout>
    </>
  );
}

export default App;

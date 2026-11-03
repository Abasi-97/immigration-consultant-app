import { useState } from "react";
import Footer from './Footer';

function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container">
        <h1 className="navbar-brand">Immigration Consultant App</h1>
        <button 
          className="navbar-toggler" 
          data-bs-toggle="collapse" 
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => setCurrentPage('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => setCurrentPage('logout')}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Logout({ setCurrentPage }) {
  return (
    <section className="p-5">
      <div className="container">
        <h1>Are You Sure You Want to Logout?</h1>
        <div className="d-flex gap-2">
          <button className="btn btn-success" onClick={() => setCurrentPage('home')}>
            Yes, Logout
          </button>
          <button className="btn btn-warning" onClick={() => setCurrentPage('home')}>
            No, Cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === 'logout' && <Logout setCurrentPage={setCurrentPage} />}
      <Footer />
    </>
  );
}
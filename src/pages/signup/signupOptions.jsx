import { useState } from 'react';
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
                onClick={() => setCurrentPage('login')}
              >
                Login
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

function ModeSelection({ setCurrentPage }) {
  return (
    <section className="p-5 bg-light">
      <div className="container text-center">
        <h1>You are....</h1>

        <div className="row g-5 justify-content-center mt-4">

          <div className="col-6 col-md-3">
            <button
              className="nav-link btn btn-success mb-3"
              onClick={() => setCurrentPage('consultantSignup')}
            >
              A Consultant
            </button>
          </div>

          <div className="col-6 col-md-3">
            <button
              className="nav-link btn btn-primary mb-3"
              onClick={() => setCurrentPage('clientSignup')}
            >
              A Client
            </button>
          </div>

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

      {currentPage === 'consultantSignup' && <ModeSelection setCurrentPage={setCurrentPage} />}

      <Footer />
    </>
  );
}
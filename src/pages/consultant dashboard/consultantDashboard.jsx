import { useEffect, useState } from "react";
import countryList from './signup/countries.js';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                  onClick={() => setCurrentPage('about')}
                >
                  About Us
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn btn-link"
                  onClick={() => setCurrentPage('services')}
                >
                  What we Do
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn btn-link"
                  onClick={() => setCurrentPage('contact')}
                >
                  Contact
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn btn-link"
                  onClick={() => setCurrentPage('signup')}
                >
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  
  function ConsultantDashboard({ setCurrentPage }) {
    return (
        <div class="d-flex">
        
            <nav class="bg-dark text-white p-3" style="width: 250px; min-height: 100vh;">
                <h5 class="mb-4">Menu</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-3">
                        <a class="nav-link text-white" href="#">Case History</a>
                    </li>
                    <li class="nav-item mb-3">
                        <a class="nav-link text-white" href="#">Notifications</a>
                    </li>
                    <li class="nav-item mb-3">
                        <a class="nav-link text-white" href="#">Logout</a>
                    </li>
                </ul>
            </nav>
      
       
            <div class="flex-grow-1 p-4">
                <div className="container py-5">
                    <div className="row gx-5">
                        <div className="col-4">
                            <div className="bg-info">
                                <div className="card-title text-white fs-3">
                                    Case History
                                </div>
                                <div className="text-white fs-1 bolder">
                                    0
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-4">
                            <div className="bg-info">
                                <div className="card-title text-white fs-3">
                                    Total Amount Earned
                                </div>
                                <div className="text-white fs-1 bolder">
                                    0
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-4">
                            <div className="bg-info">
                                <div className="card-title text-white fs-3">
                                    Success Rate
                                </div>
                                <div className="text-white fs-1 bolder">
                                    0
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
            </div>
      </div>
    );
  }

  
  
  export default ConsultantDashboard;
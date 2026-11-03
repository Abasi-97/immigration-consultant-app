import { useEffect, useState } from "react";
import countryList from './signup/countries.js';
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
                onClick={() => setCurrentPage('signupOptions')}
              >
                Signup
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

  function ConsultantList({setCurrentPage}){
    const [countrySearch,setCountry] = useState('');
    const [consultants,setConsultants] = useState([]);

    useEffect(()=>{
      async function getConsultants(){
        const data = await fetch
        const result = await data.json();
        setConsultants(result);
      }
      getConsultants();
    }, []);

    const filtered = countrySearch ? consultants.filter(
      c => c.country === countrySearch
    ) : consultants;

    return (
      <div className="container p-3">
        <label htmlFor="countrySelect">Select Country</label>
        <select name="countrySelect" value = {countrySearch} onChange={(e)=>setCountry(e.target.value)}>
          {countryList.map((country)=>{
            <option key={country} value={country}>
              {country}
            </option>
          })}
        </select>

        <div className="row">
          {filtered.map(consultant => (
            <div key={consultant.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{consultant.name}</h5>
                  <p className="card-text">
                    <strong>Country:</strong> {consultant.country}
                  </p>
                  <p className="card-text">
                    <strong>Rating:</strong> {consultant.rating}
                  </p>
                  <p className="card-text">
                    <strong>Expertise:</strong> {consultant.expertise}
                  </p>
                  <button 
                    className="btn btn-primary me-2"
                    onClick={() => setCurrentPage('chat')}
                  >
                    Message
                  </button>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => setCurrentPage('profile')}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>  
    )

  }

  function Footer(){
    return (
      <section className="footer bg-dark p-3">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-4">
              <h1>Immigration Consultants</h1>
              <h6>Follow Us</h6>
              <div className="icons row">
                <div className="col"><span><a href="#">Facebook</a></span></div>
                <div className="col"><span><a href="#">Twitter</a></span></div>
                <div className="col"><span><a href="#">Instagram</a></span></div>
              </div>
            </div>
            <div className="col-lg-8 row mt-5 mx-0">
              <div className="col-lg-4">
                <h5>Information</h5>
                <p>Get Started</p>
                <p>Login to Learn</p>
                <p>Blogs</p>
              </div>
              <div className="col-lg-4">
                <h5>Legals</h5>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>Disclaimer</p>
              </div>
            </div>
          </div>
          <section className="copy-right bg-dark">
            <div className="container ms-auto">
              <p>2026 All rights reserved | Powered by <span><a href="#">Zedulus Solutions</a></span></p>
            </div>
          </section>
        </div>
      </section>
    );
  }

  export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        {currentPage === 'consultantList' && <getConsultants/>}
        <Footer />
      </>
    );
  }
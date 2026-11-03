import { useState } from 'react';
import countryList from './countryList';

import 'bootstrap/dist/css/bootstrap.min.css';
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
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => setCurrentPage('consultantList')}
              >
                Our Consultants
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function handleSubmit(){

}

function Form(){

  


    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [workingCountries, setWorkingContries] = useState([]);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
  
    function handleSubmit(e) {
      e.preventDefault();
  
      console.log({
        firstname,
        lastname,
        email,
        country,
        address,
        phone,
        userName,
        password
      });
  
      setEmail('');
      setFirstName('');
      setLastName('');
      setCountry('');
      setAddress('');
      setPhone('');
      setUserName('');
      setPassword('');
    }
    return (
      <section className="p-5">
          <div className="container p-5">
              <form onSubmit={handleSubmit} className='bg-light p-5'>
                  <div className="mb-3">
                      <label htmlFor="firstname">
                          Firstname
                      </label>
                      <input 
                          className="form-control" 
                          name="firstname" 
                          type="firstname" 
                          id="firstname"
                          value={firstname}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                      />
                  </div>
                  <div className="mb-3">
                      <label htmlFor="lastname">
                          Lastname
                      </label>
                      <input 
                          className="form-control" 
                          name="lastname" 
                          type="text" 
                          id="lastname"
                          value={lastname}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                      />
                  </div>
                  <label for="country">Country of birth:</label>
                  <select id="country" multiple name="country" value={country} onChange={(e)=> setCountry(e.target.value)} required>
                    {countryList.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>

                  <select name="" 
                    id="workingCountries"
                    multiple
                    value={workingCountries}
                    onChange={(e)=>{
                      const selected = Array.from(e.target.selectedOptions, option => option.value)
                      setWorkingContries(selected);
                    }}>
                      {countryList.map((country)=>{
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      })}
                    </select>


                  <div className="mb-3">
                      <label for="address">Address:</label>
                      <input
                          type="text" 
                          className="form-control"
                          id="address"
                          value={address}
                          onChange={(e)=>setAddress(e.target.value)}
                          required
                      />
                  </div>

                  <div className="mb-3">
                      <label for="phoneno">Phone number:</label>
                      <input
                          type="tel" 
                          className="form-control"
                          id="phoneno"
                          value={phone}
                          onChange={(e)=>setPhone(e.target.value)}
                          required
                      />
                  </div>
                  <div className="mb-3">
                      <label for="username">User name:</label>
                      <input
                          type="text" 
                          className="form-control"
                          id="username"
                          value={userName}
                          onChange={(e)=>setUserName(e.target.value)}
                          required
                      />
                  </div>
                  <div className="mb-3">
                      <label for="password">Password:</label>
                      <input
                          type="password" 
                          className="form-control"
                          id="password"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          required
                      />
                  </div>
              </form>
          </div>
      </section>

  );
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
              <p>2026 All rights reserved</p>
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
        {currentPage === 'signupConsultant' && <Form/>}
        <Footer />
      </>
    );
  }
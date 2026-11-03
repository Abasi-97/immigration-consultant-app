import { useState } from 'react';
import countryList from './signup/countries.js';
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

function Form() {
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
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
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="firstname">Firstname</label>
            <input
              className="form-control"
              id="firstname"
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastname">Lastname</label>
            <input
              className="form-control"
              id="lastname"
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="country">Choose a country:</label>
            <select
              id="country"
              value={country}
              multiple
              onChange={(e) => setCountry(e.target.value)}
              required
              className="form-control"
            >
              <option value="" disabled>
                Select your country
              </option>

              {countryList.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input
              className="form-control"
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phoneno">Phone number</label>
            <input
              className="form-control"
              id="phoneno"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              id="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>

        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section className="footer bg-dark p-3 text-light">
      <div className="container">
        <p>2026 All rights reserved</p>
      </div>
    </section>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />

      {currentPage === 'signupClient' && <Form />}

      <Footer />
    </>
  );
}

export default App;
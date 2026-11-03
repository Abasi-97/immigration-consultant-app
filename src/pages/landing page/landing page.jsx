import { useState } from 'react';
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

function Hero({ setCurrentPage }) {
    return (
      <section id="banner">
        <div className="main-content">
          <div className="container banner-text">
            <div className="row p-5">
              <div className="col-12 text-center">
                <h1>Welcome to Immigration Consult</h1>
              </div>
              <div className="col-12 text-center">
                <p>Meet experienced professionals who will help you arrive at your destination</p>
              </div>
              <div className="col-12 text-center mt-4">
                <button 
                  className="btn btn-primary btn-lg me-2"
                  onClick={() => {
                    const element = document.getElementById('topthree');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Started
                </button>
                <button 
                  className="btn btn-outline-primary btn-lg"
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


  function About() {
    return (
      <div className="container py-5" id="about">
        <div className="text-center">
          <h3>Who we are</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatum voluptate sit in amet voluptas, mollitia a reprehenderit similique explicabo deleniti. Tempora, praesentium perferendis necessitatibus illum esse ducimus distinctio non.</p>
        </div>
        <div className="row py-4">
          <div className="col-md-6">
            <div className="p-5">
              <img 
                src="./images/women.jpg" 
                alt="About us" 
                className="img-fluid rounded mx-4"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-5">
              <h4>Welcome to Immigration Consultant App</h4>
              <p>We are a custom oriented platform, our core strength is connecting clients with experienced immigration consultants</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Topthree({ setCurrentPage }) {
    return (
      <section id="topthree">
        <div className="container p-4">
          <div className="text-center bt-line">
            <h3>Our Top Three Consultants</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatum voluptate sit in amet voluptas, mollitia a reprehenderit similique explicabo deleniti. Tempora, praesentium perferendis necessitatibus illum esse ducimus distinctio non.</p>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 mb-1">
              <div className="card">
                <img src="./images/women.jpg" alt="Consultant" className="card-img-top" />
                <div className="card-body">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe sapiente quis est error quisquam vero praesentium molestias expedita amet sunt facere asperiores, doloremque, voluptate incidunt? Aliquid optio minima exercitationem.</p>
                  <button 
                    className="btn btn-info"
                    onClick={() => setCurrentPage('signup')}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
  
            <div className="col-md-4 mb-1">
              <div className="card">
                <img src="./images/women.jpg" alt="Consultant" className="card-img-top" />
                <div className="card-body">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe sapiente quis est error quisquam vero praesentium molestias expedita amet sunt facere asperiores, doloremque, voluptate incidunt? Aliquid optio minima exercitationem.</p>
                  <button 
                    className="btn btn-info"
                    onClick={() => setCurrentPage('signup')}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
  
            <div className="col-md-4 mb-1">
              <div className="card">
                <img src="./images/women.jpg" alt="Consultant" className="card-img-top" />
                <div className="card-body">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe sapiente quis est error quisquam vero praesentium molestias expedita amet sunt facere asperiores, doloremque, voluptate incidunt? Aliquid optio minima exercitationem.</p>
                  <button 
                    className="btn btn-info"
                    onClick={() => setCurrentPage('signup')}>
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function Subscribe({ setCurrentPage }) {
    const [email, setEmail] = useState('');
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log('Email:', email);
      // TODO: Send to Supabase later
      setEmail('');
    }
  
    return (
      <section className="p-5" id="subscribe">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <form onSubmit={handleSubmit} className="bg-light p-5">
                <div className="mb-3">
                  <label htmlFor="email">
                    Email
                  </label>
                  <input 
                    className="form-control" 
                    name="email" 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
  
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
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
        {currentPage === 'home' && <Hero setCurrentPage={setCurrentPage} />}
        {currentPage === 'home' && <About />}
        {currentPage === 'home' && <Topthree setCurrentPage={setCurrentPage} />}
        {currentPage === 'home' && <Subscribe setCurrentPage={setCurrentPage} />}
        <Footer />
      </>
    );
  }
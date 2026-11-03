import { useEffect, useState } from "react";
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

function CaseHistory() {
  const [caseRecords, setCaseRecords] = useState([]);
  const [clientName] = useState("Joshua Adewale");

  useEffect(() => {
    async function getCases() {
      try {
        const data = await fetch(""); // TODO: add API URL
        const result = await data.json();
        setCaseRecords(result);
      } catch (error) {
        console.error("Error fetching cases:", error);
      }
    }

    getCases();
  }, []);

  const filteredCases = clientName
    ? caseRecords.filter((c) => c.name === clientName)
    : caseRecords;

  return (
    <div className="container">
      <table className="text-center table table-striped">

        <thead>
          <tr>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>Amount Paid</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>

        <tbody>
          {filteredCases.map((caseRecord, index) => (
            <tr key={index}>
              <td>{caseRecord.ID}</td>
              <td>{caseRecord.firstName}</td>
              <td>{caseRecord.lastName}</td>
              <td>{caseRecord.country}</td>
              <td>{caseRecord.amountPaid}</td>
              <td>{caseRecord.startDate}</td>
              <td>{caseRecord.endDate}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />

      {currentPage === 'login' && <CaseHistory />}

      <Footer />
    </>
  );
}
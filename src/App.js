import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [userData, setUserData] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false); // New loading state

  const fetchData = async (pageNumber) => {
    setLoading(true); // Show loader
    const response = await fetch(
      `https://randomuser.me/api/?page=${pageNumber}&results=1&seed=abc`
    );
    const data = await response.json();
    setUserData(data.results[0]);
    setLoading(false); // Hide loader
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleNextEmployee = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="app">
      {loading && (
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      )}
      <div className={`content ${loading ? "loading" : ""}`}>
        {userData && !loading && (
          <>
            <Card user={userData} />
            <div className="additional-info">
              <h3>Additional Information:</h3>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              <p>
                <strong>Address:</strong>{" "}
                {`${userData.location.street.number} ${userData.location.street.name}, ${userData.location.city}, ${userData.location.state}, ${userData.location.country} (${userData.location.postcode})`}
              </p>
              <p>
                <strong>Date of Birth:</strong>{" "}
                {new Date(userData.dob.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Age:</strong> {userData.dob.age}
              </p>
            </div>
          </>
        )}
      </div>
      <button
        className="next-button"
        onClick={handleNextEmployee}
        disabled={loading}
      >
        Next Employee
      </button>
    </div>
  );
}

export default App;

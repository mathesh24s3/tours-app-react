import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getTours() {
      const res = await fetch("https://course-api.com/react-tours-project");
      const data = await res.json();
      setTours(data);
      setLoading(false);
    }

    getTours();
  }, []);

  function removeCard(tourId) {
    setTours((prevTours) =>
      prevTours.filter((tour) => {
        return tour.id !== tourId;
      })
    );
  }

  const cardElement = tours.map((tour) => (
    <Card key={tour.id} tour={tour} removeCard={removeCard} />
  ));
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header--title">Our Tours</h1>
        <div className="underline"></div>{" "}
        {loading && (
          <h1
            style={{
              color: "white",
              margin: "4rem",
            }}
          >
            Loading Tours...
          </h1>
        )}
      </header>
      {cardElement}
    </div>
  );
}

export default App;

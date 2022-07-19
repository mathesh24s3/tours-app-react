import React from "react";

export default function Card({ tour, removeCard }) {
  const lessContent = tour.info.split(" ", 30);
  const [readMore, setReadMore] = React.useState(false);

  function readMoreInfo() {
    setReadMore((prevReadMore) => !prevReadMore);
  }

  return (
    <article className="tour--card">
      <img src={tour.image} />
      <footer>
        <div className="tour--info">
          <div>
            <h4>{tour.name}</h4>
            <h4 className="price">${tour.price}</h4>
          </div>
          {readMore ? (
            <p className="description">
              {tour.info}
              <button onClick={readMoreInfo}>Show Less</button>
            </p>
          ) : (
            <p className="description">
              {lessContent.map((content) => content + " ")}. . . 
              <button onClick={readMoreInfo}>Read More</button>
            </p>
          )}
        </div>
        <button
          className="not--interested btn"
          onClick={() => removeCard(tour.id)}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
}

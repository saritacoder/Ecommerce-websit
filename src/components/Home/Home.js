import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
    
      <section className="hero-section">
        <h1 className="hero-title">The Generics</h1>
        <button className="album-button">
          Get our Latest Album
        </button>
        <div>
          <button className="play-icon">▶</button>
        </div>
      </section>

      {/* Tours Section */}
      <section className="tours-section">
        <h2 className="tours-title">Tours</h2>
        <div className="tours-table">
          {[
            { date: "JUL 16", city: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
            { date: "JUL 19", city: "TORONTO,ON", venue: "BUDWEISER STAGE" },
            { date: "JUL 22", city: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
            { date: "JUL 29", city: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
            { date: "AUG 2", city: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
            { date: "AUG 7", city: "CONCORD, CA", venue: "CONCORD PAVILION" },
          ].map((tour, index) => (
            <div key={index} className="tour-row">
              <span className="tour-date">{tour.date}</span>
              <span className="tour-city">{tour.city}</span>
              <span className="tour-venue">{tour.venue}</span>
              <button className="buy-tickets-button">BUY TICKETS</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
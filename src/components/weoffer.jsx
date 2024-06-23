import React from "react";
import UsaMap from '../assets/elements/mapa_usa.png';

export const WeOffer = (props) => {
  return (
    <section id="we_offer">
      <span className="subtitle">We offer you</span>
      <h2>Perfectionists at <span>Work in any City</span></h2>
      <div id="usa_map">
        <img src={UsaMap} alt="map" />
      </div>
      <div className="offer-items-container">
        <div className="offer-item">
          <div><img src="./assets/icons/staff.svg" alt="" /></div>
          <p className="description">Staff in any city</p>
        </div>

        <div className="offer-item">
          <div><img src="./assets/icons/database.svg" alt="" /></div>
          <p className="description">Database</p>
        </div>

        <div className="offer-item">
          <div><img src="./assets/icons/clock.svg" alt="" /></div>
          <p className="description">Around-the-clock support</p>
        </div>

        <div className="offer-item">
          <div><img src="./assets/icons/report.svg" alt="" /></div>
          <p className="description">Smarter reporting</p>
        </div>

        <div className="offer-item">
          <div><img src="./assets/icons/certified.svg" alt="" /></div>
          <p className="description">W9 certified and fully insured</p>
        </div>
      </div>
    </section>
  );
};

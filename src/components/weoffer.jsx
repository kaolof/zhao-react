import React from "react";
import UsaMap from '../assets/elements/mapa_usa.png';

export const WeOffer = (props) => {
  return (
    <section id="we_offer">
      <span class="subtitle">We offer you</span>
      <h2>Perfectionists at <span>Work in any City</span></h2>
      <div id="usa_map">
        <img src={UsaMap} alt="map" />
      </div>
      <div class="offer-items-container">
        <div class="offer-item">
          <div><img src="./assets/icons/staff.svg" alt="" /></div>
          <p class="description">Staff in any city</p>
        </div>

        <div class="offer-item">
          <div><img src="./assets/icons/database.svg" alt="" /></div>
          <p class="description">Database</p>
        </div>

        <div class="offer-item">
          <div><img src="./assets/icons/clock.svg" alt="" /></div>
          <p class="description">Around-the-clock support</p>
        </div>

        <div class="offer-item">
          <div><img src="./assets/icons/report.svg" alt="" /></div>
          <p class="description">Smarter reporting</p>
        </div>

        <div class="offer-item">
          <div><img src="./assets/icons/certified.svg" alt="" /></div>
          <p class="description">W9 certified and fully insured</p>
        </div>
      </div>
    </section>
  );
};

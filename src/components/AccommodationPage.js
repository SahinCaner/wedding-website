import React from "react";
import MasterLayout from "./layout/MasterLayout";
import Hero from "./hero/Hero";

const AccommodationPage = () => {
  return (
    <MasterLayout>
      <Hero
        title="Kimberly &#x1F497; Caner"
        subTitle="07 July 2018"
        rsvp
        imageURL="/images/w11.jpg"
      />
      <div className="main main--content">
        <div className="content">
          <div className="content__item content__item--main">
            <div className="content__wrapper">
              <h1>Accommodation</h1>
              <p>We recommend for our guests to use <a href="http://www.airbnb.com" target="_blank">AirBNB</a> for a cheaper stay.</p>
              <hr />
              <p>For those prefer to stay hotels that are near to our wedding venue.</p>
              <ul>
                <li><a href="http://www.thelagunahillshotel.com" target="_blank">The Hills Hotel</a></li>
                <li><a href="http://doubletree3.hilton.com"  target="_blank">Doubletree Suites by Hilton Hotel Doheny Beach Dana Point</a></li>
                <li><a href="http://www.lagunacliffs.com"  target="_blank">Laguna Cliffs Marriott Resort & Spa</a></li>
                <li><a href="http://www.marriott.com"  target="_blank">Renaissance Club Sport Aliso Viejo Hotel</a></li>
                <li><a href="https://www.ayreshotels.com"  target="_blank">Ayres Suites Mission Viejo</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default AccommodationPage;

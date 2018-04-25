import React from "react";
import MasterLayout from "./layout/MasterLayout";
import Hero from "./hero/Hero";

const GiftPage = () => {
  return (
    <MasterLayout>
      <Hero
        title="Kimberly &#x1F497; Caner"
        subTitle="07 July 2018"
        rsvp
        imageURL="/images/w12.jpg"
      />
      <div className="main main--content">
        <div className="content">
          <div className="content__item content__item--main">
            <div class="content__wrapper">
              <h1>Gifts</h1>
              <p>
                We have an amazon wedding registry. We welcome any big/small
                contribute for our wedding registry.
              </p>

              <a
                href="https://www.amazon.com/wedding/kimberly-jones-caner-sahin-mission-viejo-july-2018/registry/UST32D53GNE7"
                target="_blank"
              >
                Click here for wedding registry.
              </a>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default GiftPage;

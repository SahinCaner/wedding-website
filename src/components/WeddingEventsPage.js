import React from "react";
import MasterLayout from "./layout/MasterLayout";
import Hero from "./hero/Hero";

const WeddingEventsPage = () => {
  return (
    <MasterLayout>
      <Hero
        title="Kimberly &#x1F497; Caner"
        subTitle="07 July 2018"
        rsvp
        imageURL="/images/w1.jpg"
      />
      <div className="main main--content">
        <div className="content">
          <div className="content__item content__item--main">
            <div class="content__wrapper">
              <h1>Wedding Events</h1>
              <p>
                <strong>
                  Check back later for more details on wedding events.
                </strong>
              </p>
              <p>
                Since some you will be coming a long way to Orange County, CA to
                be with us, we wanted to be sure we have plenty of time and
                opportunities to spend time with you. Aside from the ceremony
                and reception on Saturday, we are planning some other events
                that we hope you can join for.
              </p>
              <p>​Please leave children at home.</p>
              <p>
                Dress is wedding casual. The ceremony and reception will be held
                outdoors.
              </p>
              <p>
                <strong>Women wear: </strong>A summer sundress or a skirt or
                pants with a nice blouse.
              </p>
              <p>
                <strong>Men wear: </strong>Dress pants with a button-down shirt
                or polo.
              </p>
            </div>
            <div class="content__wrapper content__wrapper--column">
              <div class="column">
                <h3>Friday</h3>
                <p>
                  For our out of town guests we will be hosting a rehearsal
                  dinner.
                </p>
              </div>
              <div class="column">
                <h3>Saturday</h3>
                <p>
                  The wedding will be at Arroyo Trabuco Golf Club in Mission
                  Viejo.
                </p>
                <p>
                  We will start around 6pm with a ceremony followed by a
                  Californian style wedding party. We will have a cocktail
                  reception with some snacks and drinks followed by dinner.
                  Dancing will go into the night.
                </p>
              </div>
              <div class="column">
                <h3>Sunday</h3>
                <p>We will have a brunch for our out of town guests. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default WeddingEventsPage;

import React from "react";
import MasterLayout from "./layout/MasterLayout";
import Hero from "./hero/Hero";

const OurStoryPage = () => {
  return (
    <MasterLayout>
      <Hero
        title="Kimberly &#x1F497; Caner"
        subTitle="07 July 2018"
        rsvp
        imageURL="/images/our-story-background.jpg"
      />
      <div className="main main--content">
        <div className="content">
          <div className="content__item content__item--main">
            <div className="content__wrapper">
              <h1>Our Story</h1>
              <p>
                We met in May 2015 in Ankara, Turkey. Kimberly was living in
                Ankara as a teacher while Caner was working at his startup
                software company. We got to know each other by roasting
                chestnuts, watching Deadpool, and sharing laughs together.
              </p>
              <p>
                We currently live together in Los Angeles, CA. Kimberly works as
                a 4th Grade Teacher at Kabbalah Children’s Academy. Caner works
                as a software developer at his startup. We love travelling,
                hiking, snowboarding and listening to 50’s tunes.
              </p>
              <hr />
              <figure>
                <img src="/images/2.jpg" alt="" />
                <figcaption>
                  Wandering vineyards around Bordeux, France.
                </figcaption>
              </figure>
              <h2>Kimberly</h2>
              <p>
                Kimberly was born and raised in Dana Point, CA. She has lived in
                Australia, New Zealand, South Korea and Turkey. She is the
                youngest of three children in her family.
              </p>

              <h2>Caner</h2>
              <p>
                Caner was born and raised in Ankara, Turkey. He is the youngest
                of three children in his family. He enjoys playing guitar and
                building tube amplifiers. He also likes to code on his computer
                on his spare time.
              </p>
              <figure>
                <img src="/images/6.jpg" alt="" />
                <figcaption>Snowboarding in Ilgaz, Turkey.</figcaption>
              </figure>
              <figure>
                <img src="/images/7.jpg" alt="" />
                <figcaption>Walking around in Barcelona, Spain.</figcaption>
              </figure>
              <figure>
                <img src="/images/w5.jpg" alt="" />
                <figcaption>Rascafría, Spain.</figcaption>
              </figure>
              <figure>
                <img src="/images/w6.jpg" alt="" />
                <figcaption>Potsdam, Germany.</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default OurStoryPage;

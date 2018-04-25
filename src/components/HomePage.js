import React, { Component } from "react";

import MasterLayout from "./layout/MasterLayout";
import Hero from "./hero/Hero";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <MasterLayout>
          <Hero
            title="Kimberly &#x1F497; Caner"
            subTitle="07 July 2018"
            rsvp
            imageURL="/images/home-background.jpg"
          />
          <div className="main main--content">
            <div className="content">
              <div className="content__item content__item--main">
                <div className="content__wrapper">
                  <h1>Welcome</h1>
                  <p>
                    Welcome to our wedding web page! Here you will find all the
                    important information you need to know for our wedding. We
                    will be updating this as we go - don't worry we will send an
                    email along with any important updates.
                  </p>
                  <hr />
                  <p>
                    If you have any questions that remain unanswered, please
                    email us at:{" "}
                    <a href="mailto:kimberlyandcaner@gmail.com">
                      kimberlyandcaner@gmail.com
                    </a>
                  </p>
                  <figure>
                    <img src="/images/5.jpg" alt="" />
                    <figcaption>
                      Being silly around Lake Eymir. Ankara, Turkey
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </MasterLayout>
      </div>
    );
  }
}

export default HomePage;

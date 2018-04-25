import React from "react";
import MasterLayout from "./layout/MasterLayout";
import Hero from "./hero/Hero";

const ContactPage = () => {
  return (
    <MasterLayout>
      <Hero
        title="Kimberly &#x1F497; Caner"
        subTitle="07 July 2018"
        rsvp
        imageURL="/images/w3.jpg"
      />
      <div className="main main--content">
        <div className="content">
          <div className="content__item content__item--main">
            <div className="content__wrapper">
              <p>
                Please do not hessitate to ask any question. You can reach us
                via e-mail. <br />
                <a href="mailto:kimberlyandcaner@gmail.com">
                  kimberlyandcaner@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default ContactPage;

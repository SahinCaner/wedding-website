import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Hero = props => {
  const groupClasses = classNames("hero", {
    "hero--background": props.imageURL,
    "hero--map": props.map,
    "hero--rsvp": props.rsvpPage
  });
  return (
    <div className={groupClasses}>
      {props.title && (
        <div className="hero__item hero__item--title">
          {props.title && <h1>{props.title}</h1>}

          {props.subTitle && <h3>{props.subTitle}</h3>}

          {props.rsvp && (
            <Link to="/rsvp" className="btn btn--primary">
              RSVP
            </Link>
          )}
        </div>
      )}

      {props.imageURL && (
        <div className="hero__item hero__item--bg">
          <div
            className="hero__background"
            style={{ backgroundImage: `url(${props.imageURL})` }}
          />
        </div>
      )}

      {props.children && props.children}
    </div>
  );
};

export default Hero;

import React, { Component } from "react";
import MasterLayout from "./layout/MasterLayout";
import Hero from "./hero/Hero";
import database from "../firebase/firebase";
import toastr from "toastr";

export class Rsvp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guest: {
        guestEmail: props.guest ? props.guest.guestEmail : "",
        isGuestAttending: props.guest ? props.guest.isGuestAttending : "",
        numberOfAdults: props.guest ? props.guest.numberOfAdults : 0,
        guestName1: props.guest ? props.guest.guestName1 : "",
        foodAllergy1: props.guest ? props.guest.foodAllergy1 : "",
        guestName2: props.guest ? props.guest.guestName2 : "",
        foodAllergy2: props.guest ? props.guest.foodAllergy2 : "",
        address: props.guest ? props.guest.address : ""
      },
      errors: {},
      updating: false,
      removing: false,
      saving: false
    };
  }

  guestFormIsValid = () => {
    let formIsValid = true;
    let errors = {};

    if (this.state.guest.guestEmail === "") {
      errors.guestEmail =
        " Please enter your e-mail. We need your e-mail to contact you later.";
      formIsValid = false;
    }

    

    if (this.state.guest.isGuestAttending === "") {
      errors.isGuestAttending = "We need to know if you are attending or not.";
      formIsValid = false;
    }

    if (this.state.guest.numberOfAdults === 0) {
      errors.numberOfAdults = "How many of you will be attending?";
      formIsValid = false;
    }

    if (this.state.guest.guestName1 === "") {
      errors.guestName1 = "Please enter your full name.";
      formIsValid = false;
    }
    this.setState({ errors });
    return formIsValid;
  };

  updateInputState = e => {
    const field = e.target.name;
    let guest = Object.assign({}, this.state.guest);
    guest[field] = e.target.value;
    return this.setState({ guest });
  };

  onAddGuest = e => {
    e.preventDefault();
    if (!this.guestFormIsValid()) {
      return;
    }
    let guest = {
      ...this.state.guest
    };
    return database
      .ref(`guests`)
      .push(guest)
      .then(() => {
        this.props.history.push("/");
        toastr.success("Thanks for RSVP!!");
      });
  };

  render() {
    return (
      <MasterLayout>
        <Hero
          title="Kimberly &#x1F497; Caner"
          subTitle="07 July 2018"
          rsvpPage
        />
        <div className="main main--content">
          <div className="content">
            <div className="content__item content__item--main">
              <div className="content__wrapper">
                <h1>RSVP</h1>
                <p>
                  Please complete this form as accurately as possible to help us
                  plan and make our wedding day as enjoyable for you as we can!
                </p>
                <p>
                  To give all our guests the opportunity to let their hair down
                  and have a good time without having to worry about little eyes
                  and ears we politely request no children.
                </p>
                <hr />
                <form>
                  <div className={this.state.errors.guestEmail ? "form__group form__group--error" : "form__group"}>
                    <label>E-Mail</label>
                    <input
                      type="email"
                      className="styled__input"
                      name="guestEmail"
                      placeholder="Enter your email address"
                      onChange={this.updateInputState}
                    />
                    {this.state.errors.guestEmail && (
                      <p className="microcopy microcopy--error">{this.state.errors.guestEmail}</p>
                    )}
                  </div>

                  <div className={this.state.errors.isGuestAttending ? "form__group form__group--error" : "form__group"}>
                    <label>Will you attend?</label>
                    <div className="radio">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="yes"
                          name="isGuestAttending"
                          onChange={this.updateInputState}
                        />Yes
                      </label>
                    </div>
                    <div className="radio">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="no"
                          name="isGuestAttending"
                          onChange={this.updateInputState}
                        />No
                      </label>
                    </div>
                    {this.state.errors.isGuestAttending && (
                      <p className="microcopy microcopy--error">{this.state.errors.isGuestAttending}</p>
                    )}
                  </div>

                  <div className={this.state.errors.numberOfAdults ? "form__group form__group--error" : "form__group"}>
                    <label>Number of Adults</label>
                    <div className="radio">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="numberOfAdults"
                          onChange={this.updateInputState}
                          value="1"
                        />1
                      </label>
                    </div>
                    <div className="radio">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="numberOfAdults"
                          onChange={this.updateInputState}
                          value="2"
                        />2
                      </label>
                    </div>
                    {this.state.errors.numberOfAdults && (
                      <p className="microcopy microcopy--error">{this.state.errors.numberOfAdults}</p>
                    )}
                  </div>

                  <div className={this.state.errors.guestName1 ? "form__group form__group--error" : "form__group"}>
                    <label>Full Name - Adult 1</label>
                    <input
                      type="text"
                      className="styled__input"
                      name="guestName1"
                      placeholder="Enter your full name"
                      onChange={this.updateInputState}
                    />
                    {this.state.errors.guestName1 && (
                      <p className="microcopy microcopy--error">{this.state.errors.guestName1}</p>
                    )}
                  </div>

                  <div className="form__group">
                    <label>Food Allergies? Adult 1</label>
                    <input
                      type="text"
                      className="styled__input"
                      name="foodAllergy1"
                      placeholder="Example: I am vegan. I am allergic to gluten."
                      onChange={this.updateInputState}
                    />
                    <p className="microcopy">
                      Please specify if you have food allergies. If you are
                      vegan or vegetarian please specify.
                    </p>
                  </div>

                  <div className="form__group">
                    <label>Full Name - Adult 2</label>
                    <input
                      type="text"
                      className="styled__input"
                      name="guestName2"
                      placeholder="Enter your full name"
                      onChange={this.updateInputState}
                    />
                  </div>

                  <div className="form__group">
                    <label>Food Allergies? Adult 2</label>
                    <input
                      type="text"
                      className="styled__input"
                      name="foodAllergy2"
                      placeholder="Example: I am vegan. I am allergic to gluten."
                      onChange={this.updateInputState}
                    />
                    <p className="microcopy">
                      Please specify if you have food allergies. If you are
                      vegan or vegetarian please specify.
                    </p>
                  </div>

                  <div className="form__group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="styled__input"
                      name="address"
                      placeholder="Enter your home address"
                      onChange={this.updateInputState}
                    />
                    <p className="microcopy">
                      We need your home address so we can send you the
                      invitation.
                    </p>
                  </div>

                  <div className="form__group">
                    <button
                      className="button button--submit button--secondary"
                      onClick={this.onAddGuest}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </MasterLayout>
    );
  }
}

export default Rsvp;

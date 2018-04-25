import React, { Component } from "react";
import MasterLayout from "./layout/MasterLayout";
import Hero from "./hero/Hero";
import database from "../firebase/firebase";

export class GuestListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: [],
      attendingGuestNumber: 0
    };
  }

  componentDidMount() {
    return database
      .ref(`guests`)
      .once("value")
      .then(snapshot => {
        const guests = [];
        snapshot.forEach(childSnapshot => {
          guests.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        this.setState({ guests });
      });
  }

  getGuestList = () => {};

  render() {
    return (
      <MasterLayout>
        <div className="guest__list">
          <h1>People that are coming to our wedding</h1>
          <table>
            <thead>
              <tr>
                <th>E-mail</th>
                <th>Number of Adults</th>
                <th>Full Name - 1</th>
                <th>Food Preference - 1</th>
                <th>Full Name - 2</th>
                <th>Food Preference - 2</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {this.state.guests.map(guest => {
                if (guest.isGuestAttending === "yes") {
                  return (
                    <tr key={guest.id}>
                      <td>{guest.guestEmail}</td>
                      <td>{guest.numberOfAdults}</td>
                      <td>{guest.guestName1}</td>
                      <td>{guest.foodAllergy1}</td>
                      <td>{guest.guestName2}</td>
                      <td>{guest.foodAllergy2}</td>
                      <td>{guest.address}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>

        <div className="guest__list">
          <h1>People that are NOT coming to our wedding</h1>
          <table>
            <thead>
              <tr>
                <th>E-mail</th>
                <th>Number of Adults</th>
                <th>Full Name - 1</th>
                <th>Food Preference - 1</th>
                <th>Full Name - 2</th>
                <th>Food Preference - 2</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {this.state.guests.map(guest => {
                if (guest.isGuestAttending === "no") {
                  return (
                    <tr key={guest.id}>
                      <td>{guest.guestEmail}</td>
                      <td>{guest.numberOfAdults}</td>
                      <td>{guest.guestName1}</td>
                      <td>{guest.foodAllergy1}</td>
                      <td>{guest.guestName2}</td>
                      <td>{guest.foodAllergy2}</td>
                      <td>{guest.address}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </MasterLayout>
    );
  }
}

export default GuestListPage;

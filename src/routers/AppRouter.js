import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import HomePage from "../components/HomePage";
import OurStoryPage from "../components/OurStoryPage";
import WeddingEventsPage from "../components/WeddingEventsPage";
import GettingTherePage from "../components/GettingTherePage";
import NotFoundPage from "../components/NotFoundPage";
import ContactPage from "../components/ContactPage";
import AccommodationPage from "../components/AccommodationPage";
import GuestListPage from "../components/GuestListPage";
import GiftPage from "../components/GiftPage";
import { Rsvp } from "../components/Rsvp";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/story" component={OurStoryPage} />
        <Route path="/wedding-events" component={WeddingEventsPage} />
        <Route path="/getting-there" component={GettingTherePage} />
        <Route path="/rsvp" component={Rsvp} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/accommodation" component={AccommodationPage} />
        <Route path="/gifts" component={GiftPage} />
        <Route path="/guests" component={GuestListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

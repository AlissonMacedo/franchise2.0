import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import NewMeetup from '../pages/Meetup/New';
import MeetupEdit from '../pages/Meetup/Edit';
import MeetupDetails from '../pages/Meetup/Details';
import Alfred from '../pages/alfred';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/alfred" component={Alfred} isPrivate />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/meetup/new" component={NewMeetup} isPrivate />
      <Route path="/meetup/edit/:id" component={MeetupEdit} isPrivate />
      <Route path="/meetup/:id/details" component={MeetupDetails} isPrivate />
    </Switch>
  );
}

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Auth, Profile, NoPage } from '@freenit-framework/core'

import {
  Content,
  Dashboard,
  Design,
  Hosting,
  Landing,
  Pricing,
  Products,
  Role,
  Security,
  User,
} from 'pages'

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing.Detail} />
      <Route exact path="/confirm/:token" component={Auth.Confirm} />
      <Route exact path="/content" component={Content.Detail} />
      <Route exact path="/dashboard" component={Dashboard.Detail} />
      <Route exact path="/design" component={Design.Detail} />
      <Route exact path="/hosting" component={Hosting.Detail} />
      <Route exact path="/login" component={Auth.Login} />
      <Route exact path="/pricing" component={Pricing.Detail} />
      <Route exact path="/products/learndash" component={Products.LearnDash} />
      <Route exact path="/products/moodle" component={Products.Moodle} />
      <Route exact path="/products/opigno" component={Products.Opigno} />
      <Route exact path="/profile" component={Profile.Detail} />
      <Route exact path="/register" component={Auth.Register} />
      <Route exact path="/reset" component={Auth.Reset} />
      <Route exact path="/reset/:token" component={Auth.ChangePassword} />
      <Route exact path="/role/:id" component={Role.Detail} />
      <Route exact path="/roles" component={Role.List} />
      <Route exact path="/roles/:page" component={Role.List} />
      <Route exact path="/security" component={Security.Detail} />
      <Route exact path="/user/:id" component={User.Detail} />
      <Route exact path="/users" component={User.List} />
      <Route exact path="/users/:page" component={User.List} />
      <Route path="*" component={NoPage.Detail} />
    </Switch>
  )
}

export default Routing

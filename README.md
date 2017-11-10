# apprenticeship.io [![Build Status](https://travis-ci.org/apprenticeshipio/apprenticeship-io.svg?branch=development)](https://travis-ci.org/apprenticeshipio/apprenticeship-io)

# Development Setup
## Rails
* Run `bundle install`
* Run `rails db:setup`
* Run `gem install foreman` (required to run the webpack-dev-server and rails server simultaneously)

## React/webpacker (Yarn and [Node](https://nodejs.org/) version 6 or greater are requried)
* Run `yarn` (If you don't have yarn installed, follow [these instructions](https://yarnpkg.com/lang/en/docs/install/))

# Running the development server
* Run `bin/server`, which will launch a rails server at http://localhost:5000 and will launch webpack-dev-server, which will automatically pakcage and hot reload js resources. Make sure you have foreman installed - `gem install foreman`

# Development Notes
* React/Javascript files live in /app/javascript/packs. 
* Components live in /app/javascript/packs/components.
* For the sake of consistency, react files that use jsx should have a file extension of .jsx
* All json requests from the front end should be routed through the /api namespace on the rails backend. 
* There is a PagesController already setup to route non-RESTful static pages, which will probably be the base of the app. I think we will only need one route in Rails since [React Router](https://github.com/ReactTraining/react-router) is set up. 
## React Router
The `config/routes` in Rails is set up to catch all non specified routes (eg the /api) to
get routed to React Router. TODO - write a not found page to catch bad routes.
### How to use React Router
* To link to a route inside a page, make sure to `import { Link } from 'react'`.
  To create a link, use `<Link to={`resource/${resource_id}`}>Link Text</Link>`
* To add a route, go to the `app/javascript/packs/components/Main.jsx` and add
  the route to the `<Switch>` component by adding a child `<Route
path='/resource/:id' component={ComponentName} />`

# Continuous Integration
* Travis CI is setup, and all pull requests must have a passing build to be merged.

# Deployment
* The app is set up for deployment on AWS Elastic Beanstalk backed by a PostgreSQL RDS instance @joshleichtung has a staging server set up to make sure the app deploys successfully as we go, but the app has been configured so that a new instance can be set up and served easily once we are ready to go to production.

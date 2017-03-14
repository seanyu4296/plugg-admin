/*fetch('https://plugg-admin-back.herokuapp.com/graphql')
  .send(Relay.QL`query MainQuery {
        store {
          listings {
            id
          }
        }
      }
    `)*/

import App from './components/App';
import Login from './components/Login.jsx';
import ProtectedRoutes from './components/protected/ProtectedRoutes.jsx';
import Users from './components/protected/users/Users.jsx';
import SingleUser from './components/protected/users/SingleUser.jsx';
import Listings from './components/protected/listings/Listings.jsx';
import SingleListing from './components/protected/listings/SingleListing.jsx'


export default (
  <Route path="/" component={App}>
    <IndexRoute
      component={Login}
    />
    <Route path="protected" component={ProtectedRoutes}>
      <IndexRedirect to="dashboard" />
      <Route path="users" component={Users} />
      <Route path="users/:id" component={SingleUser} />
      <Route path="listings" component={Listings} />
      <Route path="listings/:id" component={SingleListing} />
    </Route>
  </Route>
)

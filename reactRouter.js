import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

//note: the components that contain or hold the Link component must also be enclosed within the Router component

<Router className='u-app-route' >

  <div>
    <Link to='/'>home</Link>
    <Link to='/about'>about</Link>
  </div>

  <Switch >

    <Route exact path='/'>
      <Home/>
    </Route>

    <Route exact path='/about'>
      <About/>
    </Route>

  </Switch>

</Router >

//use conditional rendering to protect the routes
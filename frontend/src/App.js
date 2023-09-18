import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Header } from "./components/header/Header"
import { Details } from "./pages/details/Details"
import { Account } from "./pages/account/Account"
import { Login } from "./pages/login/Login"
import { register } from "./pages/login/register"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/details/:id' component={Details} />
          <Route  path='/account' component={Account} />
          <Route  path='/login' component={Login} />
          <Route  path='/register' component={register} />
        </Switch>
      </Router>
    </>
  )
}
export default App
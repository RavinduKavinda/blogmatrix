import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Header } from "./components/header/Header"
import { Details } from "./pages/details/Details"
import { Login } from "./pages/login/Login"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/details/:id' component={Details} />
          <Route  path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  )
}
export default App
import React from "react";
import Header from "./components/shared/Header";

//Routing
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

//Components
import Login from "./components/auth";
import Register from "./components/auth/Register";
import Main from "./components/main";
import Detail from "./components/main/Detail";

//context
import OmbState from "./context/OmbState";

function App() {
  return (
    <>
      <OmbState>
        <HashRouter basename="/">
          <div>
            <Header />
            <div className="md:container md:mx-auto">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/detail/:id" component={Detail} />

                <Route exact path="/movies" component={Main} />
                <Route exact path="/register" component={Register} />
                <Redirect to="/" />
              </Switch>
            </div>
          </div>
        </HashRouter>
      </OmbState>
    </>
  );
}

export default App;

import React/* , { useState } */ from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import CreateLesson from "./screens/CreateLesson/CreateLesson";
import CreateUser from "./screens/CreateUser/CreateUser";
import Dashboard from "./screens/Dashboard/Dashboard";
import DetailLesson from "./screens/DetailLesson/DetailLesson";
import DetailUser from "./screens/DetailUser/DetailUser";
import EditLesson from "./screens/EditLesson/EditLesson";
import EditUser from "./screens/EditUser/EditUser";
import DeleteLesson from "./screens/DeleteLesson/DeleteLesson";
import DeleteUser from "./screens/DeleteUser/DeleteUser";
import { Route, Switch } from "react-router-dom";

const App = (/* props */) => {
  // const [user, setUser] = useState(null);
  // pass setUser function down to the Create Accoutn screen (compt.)
  // in that cmpt. submit will send a create request

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/add-lesson" component={CreateLesson} />
        <Route exact path="/lessons/:id/edit" component={EditLesson} />
        <Route exact path="/lessons/:id" component={DetailLesson} />
        <Route exact path="/lessons/:id/delete" component={DeleteLesson} />
        <Route exact path="/users" component={DetailUser} />
        <Route exact path="/add-user" component={CreateUser} />
        <Route exact path="/users/:id/edit" component={EditUser} />
        <Route exact path="/users/:id" component={DetailUser} />
        <Route exact path="/users/:id/delete" component={DeleteUser} />
      </Switch>
    </div>
  );
};

export default App;

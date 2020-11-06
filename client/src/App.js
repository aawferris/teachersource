import React, { useState } from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import CreateLesson from "./screens/CreateLesson/CreateLesson";
import Dashboard from "./screens/Dashboard/Dashboard";
import DetailLesson from "./screens/DetailLesson/DetailLesson";
import EditLesson from "./screens/EditLesson/EditLesson";
import DeleteLesson from "./screens/DeleteLesson/DeleteLesson";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);
  //pass setUSer function down to the Create Accoutn screen (compt.)
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
      </Switch>
    </div>
  );
};

export default App;

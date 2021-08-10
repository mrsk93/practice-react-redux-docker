
import "./App.css";
import React from "react";
import { Switch,  Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import { Book } from "./components/Book";
import { BooksList } from "./components/BooksList";

function App() {
  // React.useEffect(()=>{alert('Hi from sumits react app')})
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Book />
        </Route>
        <Route path="/books">
          <BooksList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Posts from "./components/posts.component";

function App() {
  return (

    <Router>
      <Route path="/posts" exact component={Posts} />
    </Router>
  );
}

export default App;
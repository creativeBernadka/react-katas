import Navbar from "./components/Navbar";
import SpendingsForm from "./components/SpendingsForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SpendingList from "./components/SpendingsList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main">
        <Navbar />
        <Switch>
          <Route path="/spendings">
            <SpendingList />
          </Route>
          <Route path="/">
            <div className="container">
              <h2>Please provide your latest spendings</h2>
              <SpendingsForm />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router';
import { Home } from './pages/Home/Home';
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Header } from "./shared/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/month-statistics" component={MonthStatistics} />
      </Switch>
    </div>
  );
}

export default App;

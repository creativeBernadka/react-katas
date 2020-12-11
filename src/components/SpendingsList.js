import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllDistinctDates } from "../store/spendingsSlice";
import SpendingDetails from "./SpendingsDetails";

const SpendingList = () => {
  const allDates = useSelector(getAllDistinctDates);
  const match = useRouteMatch();
  return (
    <div className="container">
      <ul className="spendings-list">
        {allDates.map((date) => (
          <li className="spendings-list__elements">
            <Link to={`${match.url}/${date}`}>{date}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route path={`${match.path}/:date`}>
          <SpendingDetails />
        </Route>
        <Route path={`${match.path}`}>
          Select date to see detailed spendings
        </Route>
      </Switch>
    </div>
  );
};

export default SpendingList;

import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllSpendingsByDate } from "../store/spendingsSlice";
import TableRow from "./TableRow";
import SpendingsForm from "./SpendingsForm";
import { useState, useEffect } from "react";

const SpendingDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [spendingsId, setSpendingsId] = useState();
  const { date } = useParams();
  const history = useHistory();
  const spendings = useSelector(getAllSpendingsByDate(date));

  const goBack = () => {
    history.goBack();
  };

  const showEditForm = (id) => {
    setSpendingsId(id);
    setShowForm(true);
  };

  return (
    <div className="spending-details">
      <h2 className="spending-details__header">{date}</h2>
      <table className="spending-details__table">
        <thead>
          <tr>
            <th>VALUE</th>
            <th>CATEGORY</th>
            <th>SUBCATEGORY</th>
          </tr>
        </thead>
        <tbody>
          {spendings.map(({ value, category: { name, subcategory }, id }) => (
            <TableRow
              value={value}
              category={name}
              subcategory={subcategory}
              showEditForm={showEditForm}
              id={id}
            />
          ))}
        </tbody>
      </table>
      {showForm && <SpendingsForm id={spendingsId} />}
      <button onClick={goBack} className="spending-details__button">
        Go back
      </button>
    </div>
  );
};

export default SpendingDetails;

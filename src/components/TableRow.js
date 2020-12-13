import React, { useEffect, useState } from "react";
import withSizes from "../hocs/withSizes";

const TableRow = ({
  value,
  category,
  subcategory,
  id,
  showEditForm,
  isMobile,
}) => {
  const [showEditButton, setShowEditButton] = useState(true);

  useEffect(() => {
    if (isMobile) {
      setShowEditButton(false);
    } else {
      setShowEditButton(true);
    }
  }, [isMobile]);
  return (
    <tr>
      <td className="spending-details__cell">{value}</td>
      <td className="spending-details__cell">{category}</td>
      <td className="spending-details__cell">{subcategory}</td>
      <td className="spending-details__cell">
        {showEditButton && (
          <button
            className="spending-details__edit-button"
            onClick={() => showEditForm(id)}
          >
            EDIT
          </button>
        )}
      </td>
    </tr>
  );
};

export default withSizes(TableRow);

const TableRow = ({ value, category, subcategory, id, showEditForm }) => {
  return (
    <tr>
      <td className="spending-details__cell">{value}</td>
      <td className="spending-details__cell">{category}</td>
      <td className="spending-details__cell">{subcategory}</td>
      <td className="spending-details__cell">
        <button
          className="spending-details__edit-button"
          onClick={() => showEditForm(id)}
        >
          EDIT
        </button>
      </td>
    </tr>
  );
};

export default TableRow;

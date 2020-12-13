import React, { useState } from "react";
import { Link } from "react-router-dom";

const routes = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/spendings",
    text: "Spendings",
  },
];

const Navbar = () => {
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(0);

  return (
    <div className="navbar">
      <ul className="navbar__list">
        {routes.map(({ to, text }, index) => (
          <li
            className={`navbar__list-element ${
              index === selectedLinkIndex && "-selected"
            }`}
            key={to}
            id={text}
            onClick={() => setSelectedLinkIndex(index)}
          >
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

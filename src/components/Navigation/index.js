import React from "react";

function Navigation(props) {
  const tabs = ["About Me", "Portfolio", "Contact", "Resume"];

  return (
    <nav className="col-md-8 row align-self-end">
      <ul className="flex-row">
        {tabs.map((tab) => (
          <li
            className={props.currentPage === tab ? "navActive" : ""}
            key={tab}
          >
            <span onClick={() => props.handlePageChange(tab)}>{tab}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

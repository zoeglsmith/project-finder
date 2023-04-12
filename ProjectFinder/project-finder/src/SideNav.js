import React from "react";
import "./NavBar.css";

function SideNav({ navigationItems = [], onItemClick, isNavOpen }) {
  const handleItemClick = (item) => {
    onItemClick(item);
  };

  const topItems = navigationItems.slice(0, 3);
  const bottomItems = navigationItems.slice(3);

  return (
    <nav className={`sidenav ${isNavOpen ? "open" : "closed"}`}>
      <ul>
        {topItems.length > 0 &&
          topItems.map((item) => (
            <li key={item.id}>
              <a href={item.url} onClick={() => handleItemClick(item)}>
                {item.label}
              </a>
            </li>
          ))}
      </ul>
      <ul className="bottom-items">
        {bottomItems.length > 0 &&
          bottomItems.map((item) => (
            <li key={item.id}>
              <a href={item.url} onClick={() => handleItemClick(item)}>
                {item.label}
              </a>
            </li>
          ))}
      </ul>

      <div className="line"></div>
    </nav>
  );
}
export default SideNav;

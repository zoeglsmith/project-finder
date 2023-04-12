import React from "react";
import "./App.css";
import SideNav from "./SideNav";
import Header from "./Header";
function App() {
  const [setSelectedItem] = React.useState(null);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const navigationItems = [
    { id: 1, label: "Home", url: "/" },
    { id: 2, label: "About", url: "/about" },
    { id: 3, label: "Contact", url: "/contact" },
    { id: 4, label: "Log In", url: "/Login" },
    { id: 5, label: "Sign Up", url: "/SignUp" },
  ];

  const handleToggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
    document.body.classList.toggle("nav-open");
  };

  return (
    <div>
      <Header onToggleNav={handleToggleNav} />
      <SideNav
        isNavOpen={isNavOpen}
        navigationItems={navigationItems}
        onItemClick={setSelectedItem}
        setIsNavOpen={setIsNavOpen}
      />
      <input type="text" id="search-bar" placeholder="Search.." />
      <footer></footer>
    </div>
  );
}

export default App;

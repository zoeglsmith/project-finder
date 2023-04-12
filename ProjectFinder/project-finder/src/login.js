import React from "react";
import SideNav from "./SideNav";
import Header from "./Header";
import "./Login.css";

function Login() {
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
      <title>Login</title>
      <Header onToggleNav={handleToggleNav} />
      <SideNav
        isNavOpen={isNavOpen}
        navigationItems={navigationItems}
        onItemClick={setSelectedItem}
        setIsNavOpen={setIsNavOpen}
      />
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />

        <input className="submitBtn" type="submit" value="Login" />
      </form>
      <footer></footer>
    </div>
  );
}

export default Login;

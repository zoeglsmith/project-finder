import React, { useState } from "react";
import SideNav from "./SideNav";
import Header from "./Header";
import "./Login.css";


function SignUp() {
  const  setSelectedItem = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [userType, setUserType] = useState('Student');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    degree: '', skills: '', interest: '',
    department: '',
  });
  // const [errorMessage, setErrorMessage] = useState('');



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
  const handleUserTypeChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Student") {
      setUserType("Student");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        degree: '',
        skills: '',
        interest: '',
        department: '',
      });
    } else if (selectedValue === "Staff") {
      setUserType("Staff");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        degree: '',
        skills: '',
        interest: '',
      });
    }
    console.log('Selected userType:', selectedValue); // Add this line to print out the selected userType
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate form data
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      // Display error message for incomplete form data
      alert("Please fill in all the required fields.");
      return;
    }
    
  
    // Set the form action based on userType state
    let formAction;
    if (userType === "Student") {
      formAction = "http://localhost:8080/student";
    } else if (userType === "Staff") {
      formAction = "http://localhost:8080/staff";
    }
  
    // Send form data to the server
    fetch(formAction, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        // Handle error response from the server
        throw new Error("Form submission failed: " + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      // Handle successful response from the server
      // ... update UI or redirect to success page ...
    })
    .catch(error => {
      // Handle error during form submission
      console.log("Form submission failed: " + error.message);
    });
  };
  

  const renderSignUpForm = () => {

    let formAction = "http://localhost:8080/student"; // default form action for Student user type
    if (userType === "Staff") {
      formAction = "http://localhost:8080/staff"; // update form action for Staff user type
    }
    if (userType === "Student") {
      return (
        <div>
          <form onSubmit={handleSubmit} action={formAction}>
            <label htmlFor="firstName">
              <b>First Name</b>
            </label>
            <input type="text" placeholder="Enter First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />

            <label htmlFor="lastName">
              <b>Last Name</b>
            </label>
            <input type="text" placeholder="Enter Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input type="email" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="degree">
              <b>Degree</b>
            </label>
            <input type="text" placeholder="Enter Degree" name="degree" value={formData.degree} onChange={handleChange} required />

            <label htmlFor="interest">
              <b>Interest</b>
            </label>
            <input type="text" placeholder="Enter Interest" name="interest" value={formData.interest} onChange={handleChange} required />

            <label htmlFor="skills">
              <b>Skills</b>
            </label>
            <input type="text" placeholder="Enter Skills" name="skills" value={formData.skills} onChange={handleChange} required />

            <button className="submitBtn" type="submit">
              Submit
            </button>
          </form>
        </div>
      );
    } else if (userType === "Staff") {
      return (
        <form onSubmit={handleSubmit} action={formAction}>
          <div>
            <label htmlFor="firstName">
              <b>First Name</b>
            </label>
            <input type="text" placeholder="Enter First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />

            <label htmlFor="lastName">
              <b>Last Name</b>
            </label>
            <input type="text" placeholder="Enter Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input type="email" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="department">
              <b>Department</b>
            </label>
            <input type="text" placeholder="Enter Department" name="department" value={formData.department} onChange={handleChange} required />

            <button className="submitBtn" type="submit" >
              Submit
            </button>
          </div>
        </form>
      );
    }

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
      <div className="container">
        <label>
          <input
            type="radio"
            name="userType"
            value="Student"
            onChange={handleUserTypeChange}
          />
          Student
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="Staff"
            onChange={handleUserTypeChange}
          />
          Staff
        </label>
        {renderSignUpForm()}
      </div>
    </div>
  );
}

export default SignUp;

const validateUserInput = (data) => {
    let errors = {};
    const requiredFields = ['email', 'firstName', 'lastName', 'password', 'type'];
    
    // Check if required fields are present
    for (const field of requiredFields) {
      if (!data[field]) {
        errors[field] = `${field} field is required`;
      }
    }
  
    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email)) {
      errors.email = 'Invalid email format';
    }
  
    return errors;
  };
  
  module.exports = validateUserInput;
  
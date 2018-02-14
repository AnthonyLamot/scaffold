// Define field validations for RegisterForm
const validations = (values) => {
  const errors = {};

  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'password',
    'confirmPassword',
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  // First Name
  if (values.firstName && values.firstName.length < 2) {
    errors.firstName = 'First name needs to be at least 2 characters';
  }
  if (values.firstName && values.firstName.length > 15) {
    errors.firstName = 'First name cannot be longer than 15 characters';
  }

  // Last Name
  if (values.lastName && values.lastName.length < 2) {
    errors.lastName = 'Last name needs to be at least 2 characters';
  }
  if (values.lastName && values.lastName.length > 15) {
    errors.lastName = 'Last name cannot be longer than 15 characters';
  }

  // Email
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Password
  if (values.password && values.password.length < 8) {
    errors.password = 'Password needs to be at least 8 characters';
  }

  // Confirm Password
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

export default validations;

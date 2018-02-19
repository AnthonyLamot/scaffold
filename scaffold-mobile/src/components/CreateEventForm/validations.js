// Define field validations for LoginForm
const validations = (values) => {
  const errors = {};

  const requiredFields = [
    'title',
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  // Title
  if (values.title && values.title.length < 2) {
    errors.title = 'Title needs to be at least 2 characters';
  }
  if (values.title && values.title.length > 15) {
    errors.title = 'Title cannot be longer than 30 characters';
  }

  // Description
  if (values.description && values.description.length > 1024) {
    errors.description = 'Description cannot be longer than 1024 characters';
  }

  return errors;
};

export default validations;

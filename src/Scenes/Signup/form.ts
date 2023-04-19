import * as FormValidator from 'yup';

export const passwordMin = (password: string): boolean => {
  return password?.length >= 8;
};

export const isValidEmail = (email: string): boolean =>
  !!email && /\S+@\S+\.\S+/.test(email);

export const isValidFullName = (fullName?: string): boolean =>
  !!fullName && /^[a-zA-Z]+[a-zA-Z]+$/.test(fullName.replace(/\s*$/, ''));

export const validationSchema = () => {
  return FormValidator.object().shape({
    firstName: FormValidator.string().required('first name is required'),
    lastName: FormValidator.string().required('last name is required'),
    email: FormValidator.string()
      .required('Email is required')
      .test('email', 'erro', isValidEmail),
    password: FormValidator.string()
      .required('Password is required')
      .test('password', 'erro', passwordMin),
  });
};

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

import * as FormValidator from 'yup';

export const passwordMin = (password: string): boolean => {
  return password?.length > 6;
};

export const isValidEmail = (email: string): boolean =>
  !!email && /\S+@\S+\.\S+/.test(email);

export const validationSchema = () => {
  return FormValidator.object().shape({
    email: FormValidator.string()
      .required('Email is required')
      .test('email', 'erro', isValidEmail),
    password: FormValidator.string()
      .required('Password is required')
      .test('password', 'erro', passwordMin),
  });
};

export type FormValues = {
  email: string;
  password: string;
};

export const initialValues = {
  email: '',
  password: '',
};

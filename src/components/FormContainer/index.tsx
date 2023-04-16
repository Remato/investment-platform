import React from 'react';
import { Formik } from 'formik';
import { Wrapper } from './styles';

type Props = {
  children: any;
  validationSchema: any;
  initialValues: Record<string, unknown>;
  onSubmit(values: any, actions: any): any;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  enableReinitialize?: boolean;
  style?: any;
};

const FormContainer: React.FC<Props> = ({
  validationSchema,
  initialValues,
  onSubmit,
  children,
  validateOnChange = false,
  validateOnBlur = false,
  enableReinitialize = false,
  style = [{}],
}) => (
  <Wrapper style={style}>
    <Formik
      enableReinitialize={enableReinitialize}
      validateOnChange={validateOnChange}
      validateOnBlur={validateOnBlur}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}>
      {children}
    </Formik>
  </Wrapper>
);

export default FormContainer;

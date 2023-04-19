import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Success from './Success';

const SuccessContainer = () => {
  const { goBack } = useNavigation();

  const resetStack = () => {
    goBack();
    goBack();
  };

  return <Success onPressOk={resetStack} />;
};

export default SuccessContainer;

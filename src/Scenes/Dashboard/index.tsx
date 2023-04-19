import React from 'react';
import Dashboard from './Dashboard';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../utils/enums';
import { useFund } from '~/stores';

const DashboardContainer = () => {
  const { navigate } = useNavigation();
  const { funds, setFund } = useFund();

  const viewFundDetails = (fundId: string) => {
    try {
      setFund(fundId);
      navigate(Routes.TRADE);
    } catch (message) {
      //error management, maybe show modal
    }
  };

  return <Dashboard onPressFund={viewFundDetails} funds={funds} />;
};

export default DashboardContainer;

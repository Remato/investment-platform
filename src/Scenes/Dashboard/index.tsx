import React from 'react';
import Dashboard from './Dashboard';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../utils/enums';
import { useFund } from '~/stores';

const DashboardContainer = () => {
  const { navigate } = useNavigation();
  const { fetchFund } = useFund();

  const viewFundDetails = async (fundId: string) => {
    try {
      await fetchFund(fundId);
      navigate(Routes.TRADE);
    } catch (message) {
      //error management, maybe show modal
    }
  };

  return <Dashboard onPressFund={viewFundDetails} />;
};

export default DashboardContainer;

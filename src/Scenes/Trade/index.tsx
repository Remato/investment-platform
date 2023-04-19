import React from 'react';
import Trade from './Trade';
import { useFund } from '~/stores';

const TradeContainer = () => {
  const { currentFund, fundInfos } = useFund();
  return <Trade fund={currentFund} fundInfos={fundInfos} />;
};

export default TradeContainer;

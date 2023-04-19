import React from 'react';
import Trade from './Trade';
import { useFund } from '~/stores';

const TradeContainer = () => {
  const { currentFund, funds } = useFund();

  const getFundInfo = () => {
    return funds.find(({ id }) => currentFund === id);
  };

  return <Trade currentFund={currentFund} fundInfo={getFundInfo()!} />;
};

export default TradeContainer;

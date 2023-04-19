import { create } from 'zustand';
import { fetchFund } from '../api';

const useFund = create<FundStore>(set => ({
  currentFund: 'TSLA',
  funds: [] as FundInfo[],
  fetchFunds: async () => {
    const funds = await fetchFund();
    set(() => ({ funds: funds }));
  },
  setFund: (fund: 'TSLA' | 'AAPL' | 'USEG') => {
    set(() => ({ currentFund: fund }));
  },
}));

export default useFund;

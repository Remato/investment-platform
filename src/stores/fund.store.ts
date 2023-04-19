import { create } from 'zustand';
import { fetchFund } from '../api';

const useFund = create<FundStore>(set => ({
  currentFund: 'TSLA',
  fundInfos: {} as FundInfo,
  fetchFund: async (fund: 'TSLA' | 'AAPL' | 'USEG') => {
    const infos = await fetchFund(fund);
    set(() => ({ fundInfos: infos, currentFund: fund }));
  },
}));

export default useFund;

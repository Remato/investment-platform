// import axios from 'axios';
import { chartData } from '../mocks/charts';
import { FUND } from '../utils/enums';

const { appleInfo, teslaInfo, usegInfo } = chartData;

// const api = axios.create({
//   baseURL: 'https://api.crowdform.com/funds',
// });

export const fetchFund = async (fund: string): Promise<FundInfo> => {
  try {
    // const { data } = await api.get(`/${fund}`);
    switch (fund) {
      case FUND.TESLA:
        return teslaInfo;
      case FUND.APPLE:
        return appleInfo;
      case FUND.USEG:
        return usegInfo;
      default:
        return {} as FundInfo;
    }
  } catch (error) {
    throw new Error(error as string);
  }
};

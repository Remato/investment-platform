// import axios from 'axios';
import { chartData } from '../mocks/charts';
const { appleInfo, teslaInfo, usegInfo } = chartData;

// const api = axios.create({
//   baseURL: 'https://api.crowdform.com/funds',
// });

export const fetchFund = async (): Promise<FundInfo[]> => {
  try {
    // const { data } = await api.get(`/${fund}`);
    return [appleInfo, teslaInfo, usegInfo];
  } catch (error) {
    throw new Error(error as string);
  }
};

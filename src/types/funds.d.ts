declare interface FundStore {
  currentFund: 'TSLA' | 'AAPL' | 'USEG';
  fundInfos: FundInfo;
  fetchFund(fund: string): void;
}

declare type FundInfo = {
  goUp: boolean;
  creditNumber: number;
  totalValueDolar: string;
  changeValuePorcentage: string;
  openPrice: string;
  closePrice: string;
  TER: string;
  AUM: string;
  issueDate: string;
  vintageRange: string;
};

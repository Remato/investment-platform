declare interface FundStore {
  currentFund: 'TSLA' | 'AAPL' | 'USEG';
  funds: FundInfo[];
  setFund(fund: string): void;
  fetchFunds(): void;
}

declare type FundInfo = {
  id: string;
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
  currentPrice: string;
  variationPercentage: string;
};

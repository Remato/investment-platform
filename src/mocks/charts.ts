const labels = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];

const dataSetTSLA = [
  228.66, 215.5, 179.07, 196.78, 190.2, 194.31, 168.95, 184.13, 193.24, 173.51,
  153.61, 149.73, 138.61, 124.94, 110.26, 122.91, 107.73, 120.38, 122.41,
  144.67, 177.56, 166.93, 190.71, 194.21,
];

const dataSetAAPL = [
  145.27, 136.21, 134.38, 135.68, 135.86, 132.96, 128.11, 134.78, 135.87,
  135.99, 142.48, 142.89, 146.17, 148.48, 154.85, 152.71, 154.67, 150.08,
  155.02, 153.67, 155.55, 159.38, 157.64, 161.64,
];

const dataSetUSEG = [
  1.27, 1.25, 1.26, 1.27, 1.28, 1.28, 1.29, 1.28, 1.3, 1.29, 1.3, 1.29, 1.3,
  1.31, 1.3, 1.32, 1.32, 1.3, 1.29, 1.3, 1.29, 1.3, 1.29, 1.28,
];

const teslaInfo = {
  id: 'TSLA',
  goUp: false,
  creditNumber: 6,
  changeValuePorcentage: '1.46% ($2.73)',
  totalValueDolar: '$1105.26',
  openPrice: '$228.66',
  closePrice: '$194.21',
  TER: '0.15%',
  AUM: '$82.33b',
  issueDate: '31/12/2022',
  vintageRange: '2010 - 2023',
  currentPrice: '$184.21',
  variationPercentage: '1.46%',
};

const appleInfo = {
  id: 'AAPL',
  goUp: true,
  creditNumber: 12,
  changeValuePorcentage: '0.75% ($1.24)',
  totalValueDolar: '$1997.64',
  openPrice: '$145.27',
  closePrice: '$161.64',
  TER: '0.14%',
  AUM: '$346.75b',
  issueDate: '31/12/2022',
  vintageRange: '1980 - 2023',
  currentPrice: '$166.47',
  variationPercentage: '0.75%',
};

const usegInfo = {
  id: 'USEG',
  goUp: true,
  creditNumber: 410,
  changeValuePorcentage: '0.26% ($0.10)',
  totalValueDolar: '$533.01',
  openPrice: '$1.27',
  closePrice: '$1.28',
  TER: '0.15%',
  AUM: '$32.53m',
  issueDate: '31/12/2022',
  vintageRange: '2010 - 2023',
  currentPrice: '$1.30',
  variationPercentage: '0.26%',
};

export const chartData = {
  appleInfo,
  teslaInfo,
  usegInfo,
  labels,
  dataSetTSLA,
  dataSetAAPL,
  dataSetUSEG,
};

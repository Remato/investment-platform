import React, { FC } from 'react';
import { Dimensions } from 'react-native';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import LineChart, {
  LineChartData,
} from 'react-native-chart-kit/dist/line-chart/LineChart';
import { Wrapper } from './styles';
import Filter from '../Filter';

type Props = {
  labels: string[];
  dataset: number[];
};

const Chart: FC<Props> = ({ labels, dataset }) => {
  const screenWidth = Dimensions.get('window').width;

  const average = +(dataset.reduce((ac, val) => ac + val, 0) / 24).toFixed(2);
  const isLowChart = average < dataset[0];

  const chartConfig: AbstractChartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 1,
    color: () => (isLowChart ? '#EE8688' : '#0FDF8F'),
    strokeWidth: 2,
    propsForHorizontalLabels: {
      opacity: 1,
    },
    propsForBackgroundLines: {
      stroke: 'transparent',
    },
  };

  const data: LineChartData = {
    labels: labels,
    datasets: [
      {
        strokeWidth: 2,
        withDots: false,
        color: () => (isLowChart ? '#EE8688' : '#0FDF8F'),
        data: dataset,
      },
    ],
  };

  return (
    <Wrapper>
      <LineChart
        data={data}
        height={220}
        width={screenWidth}
        chartConfig={chartConfig}
      />
      <Filter />
    </Wrapper>
  );
};

export default Chart;

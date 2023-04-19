import React, { FC } from 'react';
import { Text, AdCard, Card } from '~/components';
import {
  Wrapper,
  Image,
  ChartWrapper,
  InnerWrapper,
  ValueWrapper,
  AverageWrapper,
  IconWrapper,
} from './styles';
import lowChart from '../../assets/lowChart.png';
import highChart from '../../assets/highChart.png';
import highChartTwo from '../../assets/highChart-2.png';
import FontIcon from 'react-native-vector-icons/Fontisto';
import AntIcon from 'react-native-vector-icons/AntDesign';
import SimpIcon from 'react-native-vector-icons/SimpleLineIcons';

type Props = {
  onPressFund(fundId: string): void;
};

const Dashboard: FC<Props> = ({ onPressFund }) => {
  return (
    <Wrapper>
      <Text contrast bold text="Funds" variant="xlg" />
      <InnerWrapper horizontal showsHorizontalScrollIndicator={false}>
        <ChartWrapper onPress={() => onPressFund('AAPL')}>
          <IconWrapper>
            <AntIcon name="apple-o" color={'#000'} size={20} />
          </IconWrapper>
          <Text contrast bold text="AAPL" variant="sm" />
          <Image source={highChart} />
          <ValueWrapper>
            <Text contrast text="$166.47" variant="md" />
            <AverageWrapper>
              <Text isHigh text="0.75%" variant="md" />
            </AverageWrapper>
          </ValueWrapper>
        </ChartWrapper>

        <ChartWrapper onPress={() => onPressFund('TSLA')}>
          <IconWrapper>
            <FontIcon name="tesla" color={'#000'} size={20} />
          </IconWrapper>
          <Text contrast bold text="TSLA" variant="sm" />
          <Image source={lowChart} />
          <ValueWrapper>
            <Text contrast text="$184.21" variant="md" />
            <AverageWrapper>
              <Text isLow text="1.46%" variant="md" />
            </AverageWrapper>
          </ValueWrapper>
        </ChartWrapper>

        <ChartWrapper onPress={() => onPressFund('USEG')}>
          <IconWrapper>
            <SimpIcon name="energy" color={'#000'} size={20} />
          </IconWrapper>
          <Text contrast bold text="USEG" variant="sm" />
          <Image source={highChartTwo} />
          <ValueWrapper>
            <Text contrast text="$1.30" variant="md" />
            <AverageWrapper>
              <Text isHigh text="0.26%" variant="md" />
            </AverageWrapper>
          </ValueWrapper>
        </ChartWrapper>
      </InnerWrapper>
      <AdCard
        title={'Learn more about\ncarbon credits'}
        subtitle="check out our top tips!"
      />
      <Card />
    </Wrapper>
  );
};

export default Dashboard;

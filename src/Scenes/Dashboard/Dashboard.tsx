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
import { FUND } from '../../utils/enums';
import lowChart from '../../assets/lowChart.png';
import highChart from '../../assets/highChart.png';
import highChartTwo from '../../assets/highChart-2.png';
import FontIcon from 'react-native-vector-icons/Fontisto';
import AntIcon from 'react-native-vector-icons/AntDesign';
import SimpIcon from 'react-native-vector-icons/SimpleLineIcons';

type Props = {
  funds: FundInfo[];
  onPressFund(fundId: string): void;
};

const Dashboard: FC<Props> = ({ funds, onPressFund }) => {
  return (
    <Wrapper>
      <Text contrast bold text="Funds" variant="xlg" />
      <InnerWrapper horizontal showsHorizontalScrollIndicator={false}>
        {funds.map(({ id, currentPrice, variationPercentage }) => (
          <ChartWrapper key={id} onPress={() => onPressFund(id)}>
            <IconWrapper>
              {id === FUND.TESLA && <FontIcon name="tesla" size={20} />}
              {id === FUND.APPLE && <AntIcon name="apple-o" size={20} />}
              {id === FUND.USEG && <SimpIcon name="energy" size={20} />}
            </IconWrapper>
            <Text contrast bold text={id} variant="sm" />
            {id === FUND.TESLA && <Image source={lowChart} />}
            {id === FUND.APPLE && <Image source={highChart} />}
            {id === FUND.USEG && <Image source={highChartTwo} />}
            <ValueWrapper>
              <Text contrast text={currentPrice} variant="md" />
              <AverageWrapper>
                <Text isHigh text={variationPercentage} variant="md" />
              </AverageWrapper>
            </ValueWrapper>
          </ChartWrapper>
        ))}
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

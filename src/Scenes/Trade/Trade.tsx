import React, { FC } from 'react';
import {
  Wrapper,
  InfoWrapper,
  InnerWrapper,
  MenuWrapper,
  FeatherIcon,
  FundsWrapper,
  BuyButton,
  ButtonsWrapper,
  SellButton,
  ChartWrapper,
  InnerButtonWrapper,
  WithdrawButton,
  TipsWrapper,
} from './styles';
import { Chart, Info, Text, Card } from '~/components';
import { chartData } from '../../mocks/charts';
import { FUND } from '../../utils/enums';

type Props = {
  fund: string;
  fundInfos: FundInfo;
};

const Trade: FC<Props> = ({ fund, fundInfos }) => {
  const { dataSetAAPL, dataSetTSLA, dataSetUSEG, labels } = chartData;
  const {
    changeValuePorcentage,
    AUM,
    TER,
    closePrice,
    issueDate,
    openPrice,
    vintageRange,
    creditNumber,
    goUp,
    totalValueDolar,
  } = fundInfos;

  const selectFund = () => {
    switch (fund) {
      case FUND.TESLA:
        return dataSetTSLA;
      case FUND.APPLE:
        return dataSetAAPL;
      case FUND.USEG:
        return dataSetUSEG;
      default:
        return dataSetTSLA;
    }
  };

  return (
    <Wrapper showsVerticalScrollIndicator={false}>
      <FundsWrapper>
        <Text contrast bold text={`${creditNumber} Credits`} variant="xxlg" />
        <Text contrast bold text={totalValueDolar} variant="xxlg" />
      </FundsWrapper>

      <Text isHigh={goUp} text={changeValuePorcentage} variant="md" />

      <ChartWrapper>
        <Chart labels={labels} dataset={selectFund()} />
      </ChartWrapper>

      <InfoWrapper>
        <Text contrast bold text="Info & Stats" variant="xlg" />
      </InfoWrapper>

      <Info
        AUM={AUM}
        TER={TER}
        closePrice={closePrice}
        issueDate={issueDate}
        openPrice={openPrice}
        vintageRange={vintageRange}
      />

      <InfoWrapper>
        <Text contrast bold text="Fund Breakdown" variant="xlg" />
      </InfoWrapper>

      <InnerWrapper>
        <MenuWrapper>
          <Text contrast bold text="Highlighted" variant="md" />
        </MenuWrapper>
        <MenuWrapper>
          <Text contrast bold text="Value" variant="md" />
        </MenuWrapper>
        <MenuWrapper>
          <Text contrast bold text="Vintage" variant="md" />
        </MenuWrapper>
        <MenuWrapper>
          <Text contrast bold text="Registry" variant="md" />
        </MenuWrapper>
      </InnerWrapper>

      <Card isImageCard />

      <InfoWrapper>
        <FeatherIcon name="pie-chart" color="#000" size={20} />
        <Text contrast bold text="Your Portfolio" variant="xlg" />
      </InfoWrapper>

      <FundsWrapper>
        <Text contrast bold text={`${creditNumber} Credits`} variant="xxlg" />
        <Text contrast bold text={totalValueDolar} variant="xxlg" />
      </FundsWrapper>

      <FundsWrapper>
        <Text isHigh={goUp} text="8.41%" variant="md" />
        <Text text="Last purchase 28d ago" variant="md" />
      </FundsWrapper>

      <ButtonsWrapper>
        <InnerButtonWrapper>
          <SellButton name="Sell" onPress={() => {}} />
        </InnerButtonWrapper>
        <InnerButtonWrapper>
          <WithdrawButton name="Retire Credits" onPress={() => {}} />
        </InnerButtonWrapper>
      </ButtonsWrapper>

      <Text
        text="You've previously retired 28 credits of this asset"
        variant="sm"
      />

      <TipsWrapper>
        <Text
          text={
            'Please note that prices are for reference only and may\nvary at the time of excecuting a buy or sell order.\n\nThe information provided is not investment advice,\nand should not be used as a recommendation to buy\nor sell assets.'
          }
          variant="sm"
        />
      </TipsWrapper>

      <BuyButton isFullWidth name="Buy" onPress={() => {}} />
    </Wrapper>
  );
};

export default Trade;

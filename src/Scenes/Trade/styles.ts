import styled from 'styled-components/native';
import { Button } from '~/components';
import IconBase from 'react-native-vector-icons/Feather';

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const InfoWrapper = styled.View`
  margin-top: 40px;
  margin-bottom: 20px;
  flex-direction: row;
`;

export const InnerWrapper = styled.View`
  flex-direction: row;
`;

export const MenuWrapper = styled.View`
  margin-right: 20px;
`;

export const FeatherIcon = styled(IconBase)`
  margin-right: 6px;
`;

export const FundsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 16px;
`;

export const InnerButtonWrapper = styled.View`
  flex: 1;
`;

export const SellButton = styled(Button).attrs({
  variant: 'tertiary',
})`
  min-width: 100%;
  margin-right: 5px;
`;

export const WithdrawButton = styled(Button).attrs({
  variant: 'secondary',
})`
  min-width: 100%;
  margin-left: 5px;
`;

export const BuyButton = styled(Button).attrs({
  variant: 'primary',
})`
  margin-bottom: 30px;
`;

export const TipsWrapper = styled.View`
  padding: 10px;
  border-radius: 4px;
  background-color: #f4f4f4;
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const ChartWrapper = styled.View`
  margin-top: 24px;
`;

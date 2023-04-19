import styled from 'styled-components/native';
import { Button as ButtonBase } from '~/components';

export const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 12px;
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
  line-height: 32px;
  text-align: center;
  opacity: 0.8;
`;

export const Button = styled(ButtonBase).attrs({
  isFullWidth: true,
})`
  margin-top: 16px;
`;

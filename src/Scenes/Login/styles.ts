import styled from 'styled-components/native';
import {
  SceneWrapper,
  Input as InputBase,
  Button as ButtonBase,
} from '~/components';

export const Wrapper = styled(SceneWrapper)`
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.default}px;
`;

export const Button = styled(ButtonBase)`
  margin-top: 16px;
`;

export const Input = styled(InputBase)`
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.default}px;
  margin-bottom: 12px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.02;
`;

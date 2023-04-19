import styled from 'styled-components/native';
import { Input as InputBase, Button as ButtonBase } from '~/components';

export const Wrapper = styled.View`
  padding: 20px;
`;

export const TextWrapper = styled.View`
  margin-bottom: 32px;
  align-items: center;
`;

export const Input = styled(InputBase)`
  margin-bottom: 20px;
`;

export const Button = styled(ButtonBase)`
  margin-top: 16px;
`;

export const SignupTextWrapper = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
`;

export const SignupWrapper = styled.TouchableOpacity``;

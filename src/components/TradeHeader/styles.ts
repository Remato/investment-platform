import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Wrapper = styled(SafeAreaView).attrs({})`
  background-color: #fff;
`;

export const InnerWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20px;
  flex-direction: row;
  margin-top: 4px;
`;

export const Divider = styled.View`
  height: 0.5px;
  background-color: #f4f4f4;
`;

export const TextWrapper = styled.View`
  align-self: center;
  align-items: center;
  margin-bottom: 10px;
`;

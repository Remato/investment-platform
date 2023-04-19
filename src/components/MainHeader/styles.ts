import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Wrapper = styled(SafeAreaView).attrs({})`
  background-color: #fff;
`;

export const TopWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20px;
  flex-direction: row;
  margin-top: 4px;
`;

export const CenterWrapper = styled.View`
  padding-horizontal: 20px;
  flex-direction: row;
  margin-top: 16px;
`;

export const BottomWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20px;
  flex-direction: row;
  margin-top: 4px;
  margin-bottom: 30px;
`;

export const Divider = styled.View`
  height: 0.5px;
  background-color: #f4f4f4;
`;

export const ProfileWrapper = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  height: 32px;
  width: 32px;
  border-radius: 999px;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

type Props = {
  noTitle: boolean;
};

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

export const TextWrapper = styled.View<Props>`
  align-self: center;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: ${({ noTitle }) => (noTitle ? 'row' : 'column')};
`;

export const Breadcrumbs = styled.View`
  background-color: #f4f4f4;
  height: 5px;
  width: 50px;
  border-radius: 200px;
  margin-right: 5px;
  margin-bottom: 10px;
`;

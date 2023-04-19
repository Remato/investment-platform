import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const InnerWrapper = styled.ScrollView``;

export const ValueWrapper = styled.View`
  flex-direction: row;
`;

export const AverageWrapper = styled.View`
  margin-left: 6px;
`;

export const ChartWrapper = styled.TouchableOpacity`
  flex: 1;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 12px;
  margin-top: 12px;
  margin-right: 16px;
  min-width: 140px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  margin-vertical: 12px;
`;

export const IconWrapper = styled.View`
  margin-bottom: 6px;
`;

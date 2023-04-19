import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SecondaryWrapper = styled.ScrollView`
  flex-direction: row;
  margin-top: 24px;
`;

export const CardBase = styled.View`
  background-color: #f4f4f4;
  border-radius: 10px;
  height: 215px;
  width: 160px;
  padding-vertical: 20px;
  padding-horizontal: 12px;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
`;

export const InnerWrapper = styled.View`
  padding-left: 12px;
  padding-bottom: 24px;
`;

export const CardImage = styled.Image``;

export const Logo = styled.Image`
  margin-top: 16px;
  margin-bottom: 10px;
`;

export const CardText = styled.View``;

export const CardBoxWrapper = styled.TouchableOpacity`
  flex: 1;
  border-radius: 4px;
  margin-top: 12px;
  border: 1px solid #e6e6e6;
  margin-right: 16px;
`;

export const LinkText = styled.Text`
  text-decoration: underline;
  margin-top: 6px;
`;

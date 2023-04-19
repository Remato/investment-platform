import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #770fdf;
  padding: 20px;
  padding: 10px 10px 10px 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`;

export const Subtitle = styled.Text`
  color: #fff;
  margin-top: 10px;
  line-height: 15px;
`;

export const InnerWrapper = styled.View``;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})``;

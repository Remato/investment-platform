import styled from 'styled-components/native';

type Props = {
  isHighlight: boolean;
};

export const Wrapper = styled.View``;

export const InnerWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
`;

export const TextContainer = styled.TouchableOpacity<Props>`
  background-color: ${({ isHighlight }) =>
    isHighlight ? '#f7efff' : 'transparent'};
  border-radius: 4px;
  padding: 8px;
`;

export const Text = styled.Text<Props>`
  font-weight: bold;
  color: ${({ isHighlight }) => (isHighlight ? '#770FDF' : '#a0a0a0')};
`;

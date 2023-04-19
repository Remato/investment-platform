import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const Wrapper = styled.View``;

export const InputLabel = styled.Text`
  font-size: 11px;
  line-height: 14px;
  color: #a0a0a0;
`;

export const InputBase = styled(TextInput).attrs(props => ({
  mode: 'outlined',
  outlineStyle: {
    // borderColor: '#f4f4f4',
  },
  theme: {
    colors: {
      primary: props.theme.colors.primary,
    },
  },
}))`
  background-color: #f4f4f4;
`;

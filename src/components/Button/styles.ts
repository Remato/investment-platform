import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

type ButtonProps = {
  isFullWidth: boolean;
  textColor?: string;
  backgroundColor?: string;
};

export const Wrapper = styled.View``;

export const PrimaryButton = styled(Button).attrs(props => ({
  mode: 'contained',
  labelStyle: {
    color: props.theme.colors.tertiary,
    fontWeight: 'bold',
  },
}))<ButtonProps>`
  align-self: ${({ isFullWidth }) => (isFullWidth ? 'auto' : 'flex-start')};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

export const SecondaryButton = styled(Button).attrs(props => ({
  mode: 'contained',
  labelStyle: {
    color: props.theme.colors.tertiary,
    fontWeight: 'bold',
  },
}))<ButtonProps>`
  align-self: ${({ isFullWidth }) => (isFullWidth ? 'auto' : 'flex-start')};
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
`;

export const GhostButton = styled(Button).attrs(props => ({
  mode: 'contained',
  labelStyle: {
    color: props.theme.colors.primary,
    fontWeight: 'bold',
  },
}))<ButtonProps>`
  align-self: ${({ isFullWidth }) => (isFullWidth ? 'auto' : 'flex-start')};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: 1px solid #cfcfcf;
  border-radius: 4px;
`;

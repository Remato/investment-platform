import React, { FC } from 'react';
import { TextBase, Wrapper, InfoWrapper } from './styles';
import Icon from 'react-native-vector-icons/Feather';

type Props = {
  text: string;
  variant: string;
  contrast?: boolean;
  bold?: boolean;
  isHigh?: boolean;
  isLow?: boolean;
  hasInfoIcon?: boolean;
  underline?: boolean;
};

const Text: FC<Props> = ({
  text,
  variant,
  contrast = false,
  bold = false,
  isHigh = false,
  isLow = false,
  hasInfoIcon = false,
  underline = false,
}) => {
  return (
    <Wrapper>
      {isHigh && <Icon name="arrow-up-right" color={'#0FDF8F'} size={10} />}
      {isLow && <Icon name="arrow-down-right" color={'#EE8688'} size={10} />}
      <TextBase
        isLow={isLow}
        isHigh={isHigh}
        variant={variant}
        contrast={contrast}
        underline={underline}
        bold={bold}>
        {text}
      </TextBase>
      {hasInfoIcon && (
        <InfoWrapper>
          <Icon name="info" color={'#a0a0a0'} size={10} />
        </InfoWrapper>
      )}
    </Wrapper>
  );
};

export default Text;

import styled from 'styled-components/native';
import { VARIANT } from '../../utils/enums';

type Props = {
  bold: boolean;
  isLow: boolean;
  isHigh: boolean;
  variant: string;
  contrast: boolean;
};

const getFontSize = ({ variant }: Props) => {
  switch (variant) {
    case VARIANT.SMALL:
      return 12;
    case VARIANT.MEDIUM:
      return 14;
    case VARIANT.LARGE:
      return 16;
    case VARIANT.XLARGE:
      return 18;
    case VARIANT.XXLARGE:
      return 24;
    default:
      return 14;
  }
};

const getLineHeight = ({ variant }: Props) => {
  switch (variant) {
    case VARIANT.SMALL:
      return 15;
    case VARIANT.MEDIUM:
      return 18;
    case VARIANT.LARGE:
      return 20;
    case VARIANT.XLARGE:
      return 23;
    case VARIANT.XXLARGE:
      return 30;
    default:
      return 18;
  }
};

const getColor = ({ isHigh, isLow }: Props) => {
  if (isHigh) {
    return '#0FDF8F';
  } else if (isLow) {
    return '#EE8688';
  } else {
    return '#a0a0a0';
  }
};

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextBase = styled.Text<Props>`
  font-size: ${props => getFontSize(props)}px;
  line-height: ${props => getLineHeight(props)}px;
  color: ${props => (props.contrast ? '#000' : getColor(props))};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export const InfoWrapper = styled.View`
  margin-left: 4px;
`;

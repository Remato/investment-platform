import React, { FC } from 'react';
import {
  Wrapper,
  LabelTextWrapper,
  InnerWrapper,
  SubtitleWrapper,
} from './styles';
import Text from '../Text';

type Props = {
  AUM: string;
  issueDate: string;
  vintageRange: string;
  TER: string;
  closePrice: string;
  openPrice: string;
};

const Info: FC<Props> = ({
  AUM,
  TER,
  closePrice,
  issueDate,
  openPrice,
  vintageRange,
}) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <LabelTextWrapper>
          <Text hasInfoIcon text="AUM" variant="md" />
          <SubtitleWrapper>
            <Text contrast text={AUM} variant="md" />
          </SubtitleWrapper>
        </LabelTextWrapper>
        <LabelTextWrapper>
          <Text hasInfoIcon text="Vintage Range" variant="md" />
          <SubtitleWrapper>
            <Text contrast text={vintageRange} variant="md" />
          </SubtitleWrapper>
        </LabelTextWrapper>
        <LabelTextWrapper>
          <Text hasInfoIcon text="Price at Close" variant="md" />
          <SubtitleWrapper>
            <Text contrast text={closePrice} variant="md" />
          </SubtitleWrapper>
        </LabelTextWrapper>
      </InnerWrapper>

      <InnerWrapper>
        <LabelTextWrapper>
          <Text hasInfoIcon text="Issue Date" variant="md" />
          <SubtitleWrapper>
            <Text contrast text={issueDate} variant="md" />
          </SubtitleWrapper>
        </LabelTextWrapper>
        <LabelTextWrapper>
          <Text hasInfoIcon text="TER" variant="md" />
          <SubtitleWrapper>
            <Text contrast text={TER} variant="md" />
          </SubtitleWrapper>
        </LabelTextWrapper>
        <LabelTextWrapper>
          <Text hasInfoIcon text="Price at Open" variant="md" />
          <SubtitleWrapper>
            <Text contrast text={openPrice} variant="md" />
          </SubtitleWrapper>
        </LabelTextWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Info;

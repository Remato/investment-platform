import React, { FC } from 'react';
import moneyStatistics from '../../assets/moneyStatistics.png';
import { Wrapper, Title, Subtitle, InnerWrapper, Image } from './styles';

type Props = {
  title: string;
  subtitle: string;
};

const AdCard: FC<Props> = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </InnerWrapper>
      <Image source={moneyStatistics} />
    </Wrapper>
  );
};

export default AdCard;

import React, { FC } from 'react';
import { InnerWrapper, Text, TextContainer } from './styles';

const Filter: FC = ({}) => {
  return (
    <InnerWrapper>
      <TextContainer isHighlight={false}>
        <Text isHighlight={false}>1h</Text>
      </TextContainer>

      <TextContainer isHighlight={true}>
        <Text isHighlight={true}>1d</Text>
      </TextContainer>

      <TextContainer isHighlight={false}>
        <Text isHighlight={false}>1w</Text>
      </TextContainer>

      <TextContainer isHighlight={false}>
        <Text isHighlight={false}>1m</Text>
      </TextContainer>

      <TextContainer isHighlight={false}>
        <Text isHighlight={false}>1y</Text>
      </TextContainer>

      <TextContainer isHighlight={false}>
        <Text isHighlight={false}>All</Text>
      </TextContainer>
    </InnerWrapper>
  );
};

export default Filter;

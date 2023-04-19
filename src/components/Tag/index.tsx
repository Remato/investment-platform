import React, { FC } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Wrapper, TextWrapper, Text } from './styles';

type Props = {
  iconName?: string;
  text?: string;
};

const Tag: FC<Props> = ({ iconName = 'coins', text = 'Earn Rewards' }) => {
  return (
    <Wrapper>
      <FontAwesome name={iconName} size={12} color={'#770FDF'} />
      <TextWrapper>
        <Text>{text}</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default Tag;

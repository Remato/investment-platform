import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Wrapper, Subtitle, Title, Button } from './styles';

type Props = {
  onPressOk(): void;
};

const Dashboard: FC<Props> = ({ onPressOk }) => {
  return (
    <Wrapper>
      <Icon name="check-circle-outline" size={100} color="#0FDF8F" />
      <Title>Congratulations</Title>
      <Subtitle>
        {'You completed your registration,\nyou can login now!'}
      </Subtitle>
      <Button name="OK" onPress={onPressOk} />
    </Wrapper>
  );
};

export default Dashboard;

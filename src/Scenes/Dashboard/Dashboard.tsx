import React, { FC } from 'react';
import { Wrapper, Button } from './styles';

type Props = {};

const Dashboard: FC<Props> = () => {
  return (
    <Wrapper>
      <Button name="button" iconName="home" onPress={() => {}} />
    </Wrapper>
  );
};

export default Dashboard;

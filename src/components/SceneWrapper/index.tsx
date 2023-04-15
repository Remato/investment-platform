import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Wrapper } from './styles';

const SceneWrapper: FC = ({ ...rest }) => {
  return (
    <SafeAreaView>
      <Wrapper {...rest} />
    </SafeAreaView>
  );
};

export default SceneWrapper;

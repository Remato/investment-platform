import React, { FC } from 'react';
import Stacks from './navigation';
import { Provider } from 'react-native-paper';

const App: FC = () => {
  return (
    <Provider>
      <Stacks />
    </Provider>
  );
};

export default App;

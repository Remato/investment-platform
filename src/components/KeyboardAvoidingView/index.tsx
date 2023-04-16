import React, { FC, useEffect, useState } from 'react';
import {
  Keyboard,
  StyleProp,
  ViewStyle,
  KeyboardAvoidingView as Wrapper,
} from 'react-native';
import { Platform } from 'react-native';

const isIOS = () => Platform.OS === 'ios';

type Behavior = 'height' | 'position' | 'padding' | undefined;

const defaultBehavior: Behavior = isIOS() ? 'padding' : undefined;
const defaultStyle = { flex: 1 };

type Props = {
  children: any;
  style?: StyleProp<ViewStyle>;
  behavior?: Behavior;
  enabled?: boolean;
  keyboardOffset?: number;
};

const KeyboardAvoidingView: FC<Props> = ({
  style = defaultStyle,
  behavior = defaultBehavior,
  keyboardOffset = 0,
  children,
  ...rest
}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <Wrapper
      style={style}
      behavior={behavior}
      enabled={isIOS() ? isKeyboardVisible : true}
      keyboardVerticalOffset={keyboardOffset}
      {...rest}>
      {children}
    </Wrapper>
  );
};

export default KeyboardAvoidingView;

import React, { FC } from 'react';
import {
  TopWrapper,
  CenterWrapper,
  BottomWrapper,
  Wrapper,
  ProfileWrapper,
  Divider,
  TextWrapper,
} from './styles';
import { Text, Tag } from '~/components';
import { Bell, User } from '../../assets/svg';

type Props = {};

const MainHeader: FC<Props> = () => {
  return (
    <Wrapper>
      <TopWrapper>
        <ProfileWrapper>
          <User />
        </ProfileWrapper>
        <Text contrast bold text="Account: $1,457.23" variant="md" />
        <Bell />
      </TopWrapper>

      <CenterWrapper>
        <Text contrast text="Portfolio" variant="md" />
      </CenterWrapper>

      <BottomWrapper>
        <TextWrapper>
          <Text contrast bold text="$1,245.23" variant="xxlg" />
          <Text isHigh text="31.82%" variant="md" />
        </TextWrapper>
        <Tag />
      </BottomWrapper>
      <Divider />
    </Wrapper>
  );
};

export default MainHeader;

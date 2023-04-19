import React, { FC } from 'react';
import {
  InnerWrapper,
  Wrapper,
  Divider,
  TextWrapper,
  Breadcrumbs,
} from './styles';
import { Text } from '~/components';
import { useFund } from '~/stores';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { FUND } from '../../utils/enums';

type Props = {
  noTitle: boolean;
};

const TradeHeader: FC<Props> = ({ noTitle = true }) => {
  const { goBack } = useNavigation();
  const { currentFund } = useFund();

  const descriptions = {
    [FUND.TESLA]: 'Tesla Inc',
    [FUND.APPLE]: 'Apple Inc',
    [FUND.USEG]: 'U.S. Energy Corp',
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <Icon name="arrowleft" size={20} onPress={goBack} />
        <TextWrapper noTitle={noTitle}>
          {noTitle ? (
            <>
              <Breadcrumbs />
              <Breadcrumbs />
              <Breadcrumbs />
            </>
          ) : (
            <>
              <Text
                contrast
                bold
                text={descriptions[currentFund]}
                variant="lg"
              />
              <Text contrast text={currentFund} variant="md" />
            </>
          )}
        </TextWrapper>
        <Text contrast bold text="" variant="md" />
      </InnerWrapper>
      <Divider />
    </Wrapper>
  );
};

export default TradeHeader;

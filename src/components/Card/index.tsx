import React, { FC } from 'react';
import {
  Wrapper,
  CardBase,
  Text,
  CardImage,
  SecondaryWrapper,
  InnerWrapper,
  Logo,
  CardBoxWrapper,
  CardText,
  LinkText,
} from './styles';
import cardOne from '../../assets/cardImageOne.png';
import cardTwo from '../../assets/cardImageTwo.png';
import aspiraLogo from '../../assets/aspiraLogo.png';
import climeworks from '../../assets/climeworks.png';

type Props = {
  isImageCard?: boolean;
};

const Card: FC<Props> = ({ isImageCard = false }) => {
  return isImageCard ? (
    <SecondaryWrapper horizontal>
      <CardBoxWrapper>
        <CardImage source={cardOne} />
        <InnerWrapper>
          <Logo source={aspiraLogo} />
          <CardText>
            <Text>
              {
                'Aspira is building a modular,\ndirect air capture system\nwith the energy supply\nintegrated into the modules.'
              }
            </Text>
            <LinkText onPress={() => {}}>Read more</LinkText>
          </CardText>
        </InnerWrapper>
      </CardBoxWrapper>

      <CardBoxWrapper>
        <CardImage source={cardTwo} />
        <InnerWrapper>
          <Logo source={climeworks} />
          <CardText>
            <Text>
              {
                'uses renewable geothermal\nenergy and waste heat to\ncapture CO₂ directly from\nthe air.'
              }
            </Text>
            <LinkText onPress={() => {}}>Read more</LinkText>
          </CardText>
        </InnerWrapper>
      </CardBoxWrapper>
    </SecondaryWrapper>
  ) : (
    <Wrapper>
      <CardBase>
        <Text>{'Why should you\ninvest here?'}</Text>
      </CardBase>
      <CardBase />
    </Wrapper>
  );
};

export default Card;

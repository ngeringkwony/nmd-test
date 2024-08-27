import React from 'react';
import styled from 'styled-components/native';
import {Column, Row, Text} from '../../styles/sharedStyles';
import {TouchableOpacity} from 'react-native';
import Button from '../button';
import {ArrowRightIcon} from '../icons/arrowRight';

type Props = {
  title: string;
  maximumAmount: number;
  interestRate: string | number;
  isSelected?: boolean;
  onPress: () => void;
};

const View = styled.View<{isSelected?: boolean}>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 139px;
  background-color: ${props => (props.isSelected ? '#D4FAF5' : '#fff')};
  border-radius: 10px;
  border-width: 1px;
  border-color: #d9d9d9;
  padding: 22px 11px 13px 11px;
  margin-bottom: 19px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  line-height: 23px;
`;

const LoanCard = ({
  isSelected,
  title,
  maximumAmount,
  interestRate,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View isSelected={isSelected}>
        <Title>{title}</Title>
        <Row>
          <Column>
            <Text fontSize={10} fontWeight="semibold">
              Maximum Amount
            </Text>
            <Text color="#30C2E3" fontSize={24} fontWeight="bold">
              ${maximumAmount.toLocaleString()}
            </Text>
            <Text fontWeight={isSelected ? 'normal' : 'bold'} fontSize={10}>
              Interest: {interestRate}%
            </Text>
          </Column>
          <Column>
            <Button
              title="Learn More"
              variant="outline"
              size="small"
              accessory={<ArrowRightIcon />}
            />
          </Column>
        </Row>
      </View>
    </TouchableOpacity>
  );
};

export default LoanCard;

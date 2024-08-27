import styled from 'styled-components/native';

import React from 'react';
import {Text} from '../../styles/sharedStyles';

type Size = 'small' | 'large';
type Variant = 'solid' | 'outline';

type Props = {
  title: string;
  variant: Variant;
  size: Size;
  accessory?: React.ReactNode;
  onPress?: () => void;
};

const CustomButton = styled.TouchableOpacity<{
  size: Size;
  variant: Variant;
  width?: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.variant === 'solid' ? '#30c2e3' : 'transparent'};
  padding: 0px 10px;
  /* border-radius: 5px; */
  height: ${props => (props.size === 'small' ? '21px' : '56px')};
  width: ${props => (props.width ? props.width : '100%')};
  border-radius: 20px;
  border: ${props =>
    props.variant === 'outline' ? '1px solid #30c2e3' : 'none'};
`;

const Button = ({title, variant, size, accessory, onPress}: Props) => {
  return (
    <CustomButton
      onPress={onPress}
      variant={variant}
      size={size}
      width={size === 'small' ? '93px' : '100%'}>
      <Text
        fontWeight={size === 'large' ? 'semibold' : 'normal'}
        fontSize={size === 'large' ? 16 : 10}
        align="center"
        color={variant === 'solid' ? '#fff' : '#30c2e3'}>
        {title}
      </Text>
      {accessory}
    </CustomButton>
  );
};

export default Button;

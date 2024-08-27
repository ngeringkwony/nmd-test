import React from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';
type Props = {
  type?: 'emailAddress' | 'password' | 'name' | 'telephoneNumber';
  numeric?: boolean;
  placeholder?: string;
};

const CustomTextInput = styled.TextInput`
  width: 100%;
  height: 56px;
  border-width: 1px;
  border-color: #b1b1b1;
  border-radius: 8px;
  padding: 13px 18px;
  color: #000;
`;

const TextInput = ({
  type,
  numeric,
  placeholder,
  value,
  onChangeText,
}: Props & TextInputProps) => {
  return (
    <CustomTextInput
      keyboardType={numeric ? 'numeric' : 'default'}
      textContentType={type}
      placeholderTextColor="#b1b1b1"
      placeholder={placeholder || 'Value...'}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
    />
  );
};

export default TextInput;

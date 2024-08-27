import React from 'react';
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
`;

const TextInput = ({type, numeric, placeholder}: Props) => {
  return (
    <CustomTextInput
      keyboardType={numeric ? 'numeric' : 'default'}
      textContentType={type}
      placeholderTextColor="#b1b1b1"
      placeholder={placeholder || 'Value...'}
    />
  );
};

export default TextInput;

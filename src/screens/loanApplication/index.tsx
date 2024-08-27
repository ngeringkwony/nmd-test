import React from 'react';
import {Container, Header, Text} from '../../styles/sharedStyles';
import TextInput from '../../components/textInput/TextInput';
import Button from '../../components/button';
import {ScrollView} from 'react-native';
import {Form, FormField} from './styles';

const Loans = () => {
  return (
    <Container>
      <Header>Apply for a loan</Header>
      <Form>
        <ScrollView>
          <FormField>
            <Text fontWeight="500" marginBottom="8px">
              Full Name
            </Text>
            <TextInput type="name" placeholder="Full Name" />
          </FormField>
          <FormField>
            <Text fontWeight="500" marginBottom="8px">
              Email
            </Text>
            <TextInput type="emailAddress" placeholder="yourname@example.com" />
          </FormField>
          <FormField>
            <Text fontWeight="500" marginBottom="8px">
              Loan Amount
            </Text>
            <TextInput numeric placeholder="UGX" />
          </FormField>
          <FormField>
            <Text fontWeight="500" marginBottom="8px">
              Loan Purpose
            </Text>
            <TextInput placeholder="UGX" />
          </FormField>
        </ScrollView>
      </Form>

      <Button title="SUBMIT" size="large" variant="solid" />
    </Container>
  );
};

export default Loans;

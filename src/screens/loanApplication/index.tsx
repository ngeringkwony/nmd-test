import React, {useMemo, useState} from 'react';
import {Container, Header, Text} from '../../styles/sharedStyles';
import TextInput from '../../components/textInput/TextInput';
import Button from '../../components/button';
import {ScrollView} from 'react-native';
import {Form, FormField} from './styles';
import {applyLoan} from '../../api/rest/loanApi';

const Loans = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = useMemo(() => {
    let newErrors: {[key: string]: string} = {};

    if (!fullName) newErrors.fullName = 'Full name is required';

    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';

    if (!loanAmount) newErrors.loanAmount = 'Loan amount is required';
    else if (isNaN(Number(loanAmount)))
      newErrors.loanAmount = 'Must be a number';
    else if (Number(loanAmount) < 0)
      newErrors.loanAmount = 'Must be greater than 0';

    if (!loanPurpose) newErrors.loanPurpose = 'Loan purpose is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [fullName, email, loanAmount, loanPurpose]);

  const handleSubmit = async () => {
    if (validateForm) {
      setLoading(true);
      // Proceed with form submission
      const response = await applyLoan({
        full_name: fullName,
        email,
        loan_amount: Number(loanAmount),
        loan_purpose: loanPurpose,
      });

      if (response.success) {
        setSuccess(true);
      } else {
        setErrors({...errors, submit: response.data.message});
      }
      setLoading(false);
      console.log(response);
    }
  };
  return (
    <Container>
      <Header>Apply for a loan</Header>
      <Form>
        <ScrollView>
          <FormField>
            <Text fontWeight="500" marginBottom="8px">
              Full Name
            </Text>
            <TextInput
              onChangeText={setFullName}
              type="name"
              value={fullName}
              placeholder="Full Name"
            />
            {errors.fullName && (
              <Text fontSize={12} color="red">
                {errors.fullName}
              </Text>
            )}
          </FormField>
          <FormField>
            <Text fontWeight="500" marginBottom="8px">
              Email
            </Text>
            <TextInput
              onChangeText={setEmail}
              type="emailAddress"
              value={email}
              placeholder="yourname@example.com"
            />
            {errors.email && (
              <Text fontSize={12} color="red">
                {errors.email}
              </Text>
            )}
          </FormField>
          <FormField>
            <Text fontWeight="500" marginBottom="8px">
              Loan Amount
            </Text>
            <TextInput
              onChangeText={setLoanAmount}
              numeric
              value={loanAmount}
              placeholder="UGX"
            />
            {errors.loanAmount && (
              <Text fontSize={12} color="red">
                {errors.loanAmount}
              </Text>
            )}
          </FormField>
          <FormField>
            <Text fontWeight="500" marginBottom="8px">
              Loan Purpose
            </Text>
            <TextInput
              onChangeText={setLoanPurpose}
              value={loanPurpose}
              placeholder="UGX"
            />
            {errors.loanPurpose && (
              <Text fontSize={12} color="red">
                {errors.loanPurpose}
              </Text>
            )}
          </FormField>
        </ScrollView>
      </Form>

      <Button
        onPress={handleSubmit}
        title="SUBMIT"
        size="large"
        variant="solid"
      />
      {errors.submit && (
        <Text fontSize={12} align="center" color="red">
          {errors.submit}
        </Text>
      )}
      {success && (
        <Text fontSize={12} align="center" color="green">
          Loan application submitted successfully
        </Text>
      )}
    </Container>
  );
};

export default Loans;

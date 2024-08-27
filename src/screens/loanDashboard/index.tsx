import LoanCard from '../../components/loanCard';
import {Container, Text} from '../../styles/sharedStyles';
import {Header, LoansContainer} from './styles';
import Button from '../../components/button';
import {ScrollView} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  Route,
  useNavigation,
} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <Container>
      <LoansContainer>
        <Header>Loan Application Dashboard</Header>
        <ScrollView>
          <LoanCard
            title="Personal Loan"
            maximumAmount={10000}
            interestRate={10}
            isSelected={true}
          />
          <LoanCard
            title="Personal Loan"
            maximumAmount={500000}
            interestRate={10}
          />
        </ScrollView>
      </LoansContainer>
      <Button
        onPress={() => navigation.navigate('LoanApplication')}
        title="APPLY FOR A LOAN"
        variant="solid"
        size="large"
      />
    </Container>
  );
};

export default Home;

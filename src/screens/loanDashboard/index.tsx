import LoanCard from '../../components/loanCard';
import {Container, Text} from '../../styles/sharedStyles';
import {Header, LoansContainer} from './styles';
import Button from '../../components/button';
import {FlatList} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {GET_LOAN_PRODUCTS} from '../../api/graphql/queries';
import {useState} from 'react';
import {LoanProductsQueryResult} from '../../utils/types';

const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [selectedLoan, setSelectedLoan] = useState<number | null>(null);
  const {data, loading, error} =
    useQuery<LoanProductsQueryResult>(GET_LOAN_PRODUCTS);

  return (
    <Container>
      <LoansContainer>
        <Header marginVertical="20px">Loan Application Dashboard</Header>

        {/* TODO: Add a loading state */}
        {/* TODO: Add an error state */}
        {loading ? (
          <Text>Loading!</Text>
        ) : error ? (
          <Text>Error!</Text>
        ) : (
          <FlatList
            data={data?.loanProducts}
            renderItem={({item: loan}) => (
              <LoanCard
                onPress={() => setSelectedLoan(loan.id)}
                title={loan.name}
                maximumAmount={loan.maximumAmount}
                interestRate={loan.interestRate}
                isSelected={loan.id === selectedLoan}
              />
            )}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        )}
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


export interface LoanProduct {
  __typename: "LoanProduct";
  id: number;
  interestRate: number;
  maximumAmount: number;
  name: string;
}

export type LoanProductsQueryResult = {
  loanProducts: LoanProduct[];
};
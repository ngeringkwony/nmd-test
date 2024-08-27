import {post} from './axiosClient';

export const applyLoan = (loanData: {
  full_name: string;
  email: string;
  loan_amount: number;
  loan_purpose: string;
}) => {
  return post('/apply-loan', loanData);
};

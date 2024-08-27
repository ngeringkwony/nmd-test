import styled from 'styled-components/native';
import {Header as HeaderText} from '../../styles/sharedStyles';

export const Header = styled(HeaderText)<{marginVertical?:string}>`
  font-size: 29px;
  line-height: 34px;
  margin-bottom: ${props => props.marginVertical || '0px'};
`;

export const LoansContainer = styled.View`
  width: 100%;
  height: 90%;
`;

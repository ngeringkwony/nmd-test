import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding: 32px;
  background-color: #fff;
`;

export const Header = styled.Text`
  font-size: 32px;
  color: #000;
  font-weight: bold;
  font-family: 'Roboto';
`;

export const Text = styled.Text<{
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  marginBottom?: string;
  width?: string;
  align?: string;
  textTransform?: string;
}>`
  font-size: ${props => props.fontSize || 16}px;
  font-weight: ${props => props.fontWeight || 'normal'};
  text-align: ${props => props.align || 'start'};
  color: ${props => props.color || '#000'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  width: ${props => props.width || '100%'};
`;

export const Row = styled.View<{margin?: string}>`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin: ${props => props.margin || '0 0 0 0'};
`;

export const Column = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;


import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  border-radius: 4px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDoTextoDoBotao};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  border-radius: 8px;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
`

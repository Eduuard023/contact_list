import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  border: none;
`

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`

export const DangerButton = styled(Button)`
  background-color: #e74c3c;
  color: #fff;

  &:hover {
    background-color: #c0392b;
  }
`

export const SuccessButton = styled(Button)`
  background-color: #2ecc71;
  color: #fff;

  &:hover {
    background-color: #27ae60;
  }
`

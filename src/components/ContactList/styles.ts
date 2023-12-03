import styled from 'styled-components'
import * as S from '../../GlobalStyles'

export const StyledContactList = styled.div`
  margin-bottom: 20px;
`

export const ContactListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ecf0f1;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`

export const RemoveButton = styled(S.DangerButton)`
  margin-left: 10px;
`

export const EditButton = styled(S.Button)`
  margin-left: 10px;
`

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, Contact } from '../../store/contacts'
import * as S from './styles'

const AddContact: React.FC = () => {
  const dispatch = useDispatch()
  const [newContact, setNewContact] = useState<Contact>({
    id: 0,
    fullName: '',
    email: '',
    phone: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value
    })
  }

  const handleAddContact = () => {
    const contactWithId = { ...newContact, id: new Date().getTime() }
    dispatch(addContact(contactWithId))
    setNewContact({
      id: 0,
      fullName: '',
      email: '',
      phone: ''
    })
  }

  return (
    <S.StyledAddContact>
      <h2>Add Contact</h2>
      <S.AddContactInput
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={newContact.fullName}
        onChange={handleInputChange}
      />
      <S.AddContactInput
        type="text"
        name="email"
        placeholder="Email"
        value={newContact.email}
        onChange={handleInputChange}
      />
      <S.AddContactInput
        type="text"
        name="phone"
        placeholder="Phone"
        value={newContact.phone}
        onChange={handleInputChange}
      />
      <S.AddContactButton onClick={handleAddContact}>
        Add Contact
      </S.AddContactButton>
    </S.StyledAddContact>
  )
}

export default AddContact

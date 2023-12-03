import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { editContact, Contact } from '../../store/contacts'
import * as S from './styles'

const EditContact: React.FC<{ contactId: number; onClose: () => void }> = ({
  contactId,
  onClose
}) => {
  const dispatch = useDispatch()
  const contacts = useSelector((state: RootState) => state.contacts)
  const [editedContact, setEditedContact] = useState<Contact | undefined>(
    contacts.find((contact) => contact.id === contactId)
  )

  useEffect(() => {
    setEditedContact(contacts.find((contact) => contact.id === contactId))
  }, [contacts, contactId])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedContact({
      ...editedContact!,
      [e.target.name]: e.target.value
    })
  }

  const handleEditContact = () => {
    if (editedContact) {
      dispatch(editContact(editedContact))
      onClose()
    }
  }

  return (
    <S.StyledEditContact>
      <h2>Edit Contact</h2>
      {editedContact && (
        <>
          <S.EditContactInput
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={editedContact.fullName}
            onChange={handleInputChange}
          />
          <S.EditContactInput
            type="text"
            name="email"
            placeholder="Email"
            value={editedContact.email}
            onChange={handleInputChange}
          />
          <S.EditContactInput
            type="text"
            name="phone"
            placeholder="Phone"
            value={editedContact.phone}
            onChange={handleInputChange}
          />
          <S.SaveButton onClick={handleEditContact}>Save Changes</S.SaveButton>
        </>
      )}
    </S.StyledEditContact>
  )
}

export default EditContact

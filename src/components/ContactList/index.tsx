// src/components/ContactList.tsx
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { Contact, removeContact } from '../../store/contacts'
import * as S from './styles'
import EditContact from '../editContact'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()
  const [editingContactId, setEditingContactId] = useState<number | null>(null)

  const handleRemoveContact = (id: number) => {
    dispatch(removeContact(id))
  }

  const handleEditContact = (id: number) => {
    setEditingContactId(id)
  }

  const handleCloseEdit = () => {
    setEditingContactId(null)
  }

  return (
    <S.StyledContactList>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact: Contact) => (
          <S.ContactListItem key={contact.id}>
            <div>
              {contact.fullName} - {contact.email} - {contact.phone}
            </div>
            <div>
              <S.RemoveButton onClick={() => handleRemoveContact(contact.id)}>
                Remove
              </S.RemoveButton>
              <S.EditButton onClick={() => handleEditContact(contact.id)}>
                Edit
              </S.EditButton>
            </div>
            {editingContactId === contact.id && (
              <EditContact contactId={contact.id} onClose={handleCloseEdit} />
            )}
          </S.ContactListItem>
        ))}
      </ul>
    </S.StyledContactList>
  )
}

export default ContactList

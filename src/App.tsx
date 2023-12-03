// src/App.tsx
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import AddContact from './components/addContact'
import ContactList from './components/ContactList'
import EditContact from './components/editContact'

function App() {
  return (
    <Provider store={store}>
      <div>
        <AddContact />
        <ContactList />
        <EditContact
          contactId={0}
          onClose={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      </div>
    </Provider>
  )
}

export default App

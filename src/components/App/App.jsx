import { React, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactList/ContactsList';
import { Filter } from '../Filter/Filter';
import { baseContacts } from 'services/localStorage';
import { getFromLocalStorage, setToLocalStorage } from 'services/localStorage';

import { Container } from '../ContactList/Container.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    getFromLocalStorage('contacts') ?? baseContacts
  );

  const [filter, setFilter] = useState('');

  const formCreateContacts = (name, number) => {
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        return alert(`${name} is already in contacts.`);
      }
    }
    const contact = { id: nanoid(), name, number };
    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const onFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  useEffect(() => {
    setToLocalStorage('contacts', contacts);
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formCreateContacts} />
      {contacts.length > 0 && <h2>Contacts</h2>}
      {contacts.length > 1 && <Filter onFilter={onFilter} />}
      <ContactsList contacts={filteredContacts} deleteContact={deleteContact} />
    </Container>
  );
};

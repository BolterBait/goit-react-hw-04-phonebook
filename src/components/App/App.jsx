import { React, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactList/ContactsList';
import { Filter } from '../Filter/Filter';
import { baseContacts } from 'components/Constants/Constants';
import {
  getFromLocalStorage,
  setToLocalStorage,
} from 'components/Constants/localStorage';

import { Container } from '../ContactList/Container.styled';

export function App() {
  const [contacts, setContacts] = useState(
    getFromLocalStorage('contacts') ?? baseContacts
  );
  const [filter, setFilter] = useState('');

  const formCreateContacts = contacts => {
    const { name, number } = contacts;
    const contact = { id: nanoid(), name, number };
    for (const newContact of contacts) {
      if (newContact.name === name) {
        return alert(`${name} is already in contacts.`);
      }
    }
    setContacts(prevState => [...prevState, contact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevStart.filter(contact => contact.id !== contactId)
    );
  };

  const onFilter = event =>
    setFilter({
      filter: event.currentTarget.value,
    });

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formCreateContacts}></ContactForm>
      <h2>Contacts</h2>
      {/* <Filter onFilter={this.onFilter} filter={filter}></Filter> */}
      <ContactsList
        deleteContact={this.deleteContact}
        // contacts={filteredList}
      ></ContactsList>
    </Container>
  );
}

// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   formCreateContacts = contacts => {
//     const { name, number } = contacts;
//     const contact = { id: nanoid(), name, number };
//     for (const newContact of this.state.contacts) {
//       if (newContact.name === name) {
//         return alert(`${name} is already in contacts.`);
//       }
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, contact],
//     }));
//   };

//   onFilter = event =>
//     this.setState({
//       filter: event.currentTarget.value,
//     });

//   filteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contacts =>
//       contacts.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   componentDidMount() {
//     const storedContacts = JSON.parse(localStorage.getItem('contacts'));
//     if (storedContacts) {
//       this.setState({ contacts: storedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter } = this.state;
//     const filteredList = this.filteredContacts();
//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formCreateContacts}></ContactForm>
//         <h2>Contacts</h2>
//         <Filter onFilter={this.onFilter} filter={filter}></Filter>
//         <ContactsList
//           deleteContact={this.deleteContact}
//           contacts={filteredList}
//         ></ContactsList>
//       </Container>
//     );
//   }
// }

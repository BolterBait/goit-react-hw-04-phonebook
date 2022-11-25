import React from 'react';
import PropTypes from 'prop-types';

import { ContactItem } from '../ContactItem/ContactItem';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          deleteContact={deleteContact}
          key={id}
          contact={name}
          number={number}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func.isRequired,
};

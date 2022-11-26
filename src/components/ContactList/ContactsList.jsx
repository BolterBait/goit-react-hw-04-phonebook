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
          name={name}
          number={number}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

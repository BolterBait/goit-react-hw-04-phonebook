import React from 'react';
import PropTypes from 'prop-types';

import { Item, ItemField, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({ contact, deleteContact }) => {
  const { name, number } = contact;
  return (
    <Item>
      <ItemField>{name}:</ItemField>
      <ItemField>{number}</ItemField>
      <DeleteButton
        type="button"
        contact={contact.id}
        onClick={() => deleteContact(contact.id)}
      >
        delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

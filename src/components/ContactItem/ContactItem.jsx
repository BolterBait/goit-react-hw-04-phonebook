import React from 'react';
import PropTypes from 'prop-types';

import { Item, ItemField, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <Item>
      <ItemField>{name}:</ItemField>
      <ItemField>{number}</ItemField>
      <DeleteButton type="button" onClick={() => deleteContact(id)}>
        delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

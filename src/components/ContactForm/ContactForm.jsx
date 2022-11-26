import { React, useState } from 'react';
import PropTypes from 'prop-types';

import { FieldName, Field, Wrap, AddButton } from './ContactForm.styled';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Wrap onSubmit={handleSubmit}>
      <FieldName>
        Name
        <Field
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FieldName>
      <FieldName>
        Phone number
        <Field
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FieldName>
      <AddButton type="submit">Add contact</AddButton>
    </Wrap>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

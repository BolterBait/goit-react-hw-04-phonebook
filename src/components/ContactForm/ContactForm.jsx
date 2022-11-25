import { React, Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { FieldName, Field, Wrap, AddButton } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.id = nanoid();
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Wrap onSubmit={this.handleSubmit}>
        <FieldName htmlFor={this.id}>
          Name
          <Field
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.id}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FieldName>
        <FieldName htmlFor={this.phoneNumber}>
          Phone number
          <Field
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FieldName>
        <AddButton type="submit">Add contact</AddButton>
      </Wrap>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

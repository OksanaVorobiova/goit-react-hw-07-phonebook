//import { useState } from 'react';
import { FormStyled } from './Form.styled';
//import { nanoid } from 'nanoid';
//import { addContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

export const Form = ({ onSubmit }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const contact = { name, number };
  const dispatch = useDispatch();

  /*const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };*/

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements);
    const [name, number] = e.target.elements;

    //onSubmit({ ...contact, id: nanoid() });
    // dispatch(addContact(name.value, number.value));
    dispatch(
      addContact({
        id: Date.now(),
        name: name.value,
        phone: number.value,
      })
    );
    e.target.reset();
  };

  return (
    <FormStyled onSubmit={handleFormSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </FormStyled>
  );
};

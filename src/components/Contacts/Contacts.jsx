import { ContactList } from './Contacts.styled';
//import { selectContacts, selectFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
//import { deleteContact } from 'redux/contactsSlice';
//import { useEffect } from 'react';
//import { useMemo } from 'react';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectVisibleContacts, selectLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { Blocks } from 'react-loader-spinner';

export const Contacts = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectLoading);
  // const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // console.log(contacts);
  }, [dispatch]);

  const handleClick = e => {
    dispatch(deleteContact(e.target.id));
    // dispatch(fetchContacts());
  };

  if (isLoading) {
    return <Blocks />;
  } else if (contacts.length > 0) {
    return (
      <ContactList>
        {contacts.map(({ id, name, phone }) => (
          <li key={id}>
            <p>
              {name}: {phone}
            </p>
            <button type="button" name="delete" id={id} onClick={handleClick}>
              Delete
            </button>
          </li>
        ))}
      </ContactList>
    );
  } else if (contacts.length === 0) {
    return (
      <ContactList>
        <li>
          <p>No contacts here yet</p>
        </li>
      </ContactList>
    );
  }
};

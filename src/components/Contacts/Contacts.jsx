import { ContactList } from './Contacts.styled';
//import { selectContacts, selectFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
//import { deleteContact } from 'redux/contactsSlice';
//import { useEffect } from 'react';
//import { useMemo } from 'react';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const Contacts = () => {
  const contacts = useSelector(selectVisibleContacts);
  // const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // console.log(contacts);
  }, [dispatch]);

  const handleClick = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  if (contacts.length > 0) {
    return (
      <ContactList>
        {contacts.map(({ createdAt, name, phone }) => (
          <li key={createdAt}>
            <p>
              {name}: {phone}
            </p>
            <button
              type="button"
              name="delete"
              id={createdAt}
              onClick={handleClick}
            >
              Delete
            </button>
          </li>
        ))}
      </ContactList>
    );
  } else {
    return <></>;
  }
};

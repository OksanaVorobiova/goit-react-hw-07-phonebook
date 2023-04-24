//import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Contacts/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';

export const App = () => {
  //const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};
